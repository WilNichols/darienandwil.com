import dotenv from 'dotenv';
import { DateTime } from 'luxon';
import { EleventyRenderPlugin } from '@11ty/eleventy';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItTitle from 'markdown-it-title';
import fs from 'fs';
import { getAverageColor } from 'fast-average-color-node';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import sizeOf from 'image-size';


dotenv.config();

export default async function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  const markdownItOptions = {
      html: true,
      breaks: false,
      linkify: true,
      typographer: true,
  };
  // From Benyamin: https://github.com/binyamin/eleventy-garden/discussions/45
  const md = markdownIt(markdownItOptions)
  .use(markdownItAnchor)
  .use(markdownItAttrs)
  .use(markdownItFootnote)
  .use(markdownItTitle)
  
  eleventyConfig.setLibrary('md', md);
  
  
  // https://stackoverflow.com/questions/66083103/how-to-generate-a-list-of-all-collections-in-11ty
  eleventyConfig.addCollection("tagsList", function(collectionsApi) {
      const tagsList = new Set();
      collectionsApi.getAll().map( item => {
          if (item.data.tags) { // handle pages that don't have tags
              item.data.tags.map( tag => tagsList.add(tag))
          }
      });
      return tagsList;
  });
  
  eleventyConfig.addFilter("markdownify", string => {
      return md.render(string)
  });
  
  // simple cache busting method from https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/
  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", DateTime.local().toFormat("X"));
    return `${urlPart}?${params}`;
  });
   
  eleventyConfig.addAsyncFilter("getPhotos",  async function() {
    // do some Async work
    const client = new S3Client({ 
      region: "us-east-1" ,
      credentials: {
        accessKeyId: process.env.WN_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.WN_AWS_SECRET_ACCESS_KEY
      }
    });
    const albumsParams = {
      Bucket: 'wnphoto01',
      Delimiter: '/',
      Prefix: 'wedding/'
    };
    
    const command = new ListObjectsV2Command(albumsParams);
    let data;
    let albums;
    try {
      data = await client.send(command);
      albums = data.Contents.map(a => a.Key.replace(albumsParams.Prefix, '').replace(albumsParams.Delimiter, ''));
      // fs.writeFileSync('./aws-' + dir + '.json', JSON.stringify(albums, null, 1) , 'utf-8');
    } catch (error) {
      return 'AWS failure'
    } finally {
      // console.log(albums)
      return albums;
    }
  });
  
  eleventyConfig.addAsyncFilter('imageInfo', async function(src) {
      const path = src.replace(process.env.KXCDN, '_offline/thumbs').replace('.jpg', '.webp').replace('.png', '.webp');
      const width = sizeOf(path).width;
      const height = sizeOf(path).height;
      async function getColor() {
        return getAverageColor(path).then(color => {
            return color.hex;
        });
      };
      const color = await getColor();
      const obj = {path: path, height: height, width: width, ratio: width/height, color: color};
      return obj;
  });
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  eleventyConfig.addFilter('log', (value) => {
    console.log('\x1b[37m', value);
    console.log('\x1b[0m', '');
  });
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  eleventyConfig.addFilter('warn', (value) => {
    console.warn('\x1b[33m', value);
    console.log('\x1b[0m', '');
  });
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  eleventyConfig.addFilter('error', (value) => {
    console.error('\x1b[31m', value);
    console.log('\x1b[0m', '');
  });
  
  // Server
  eleventyConfig.setServerOptions({
    liveReload: true
  });

  // Passthroughs. Specify individual instead of all, since sass is handled separately
  eleventyConfig.addPassthroughCopy({"src/_redirects": "/_redirects" });
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "/robots.txt"});
  eleventyConfig.addPassthroughCopy({"src/static/img": "/assets/img"});
  eleventyConfig.addPassthroughCopy({"src/static/js": "/assets/js"});
  eleventyConfig.addPassthroughCopy({"src/static/favicon": "/"});

  // CSS Mapping
  if (process.env.ELEVENTY_ENV == 'dev') {
    eleventyConfig.addPassthroughCopy({"src/static/css": "/src/static/css"});
  }


  // WatchTargets
  eleventyConfig.addWatchTarget("src/static/css/");
  eleventyConfig.addWatchTarget("src/static/js/");
  eleventyConfig.setWatchThrottleWaitTime(1000); // in milliseconds
  
  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts"
    }
  }
};
