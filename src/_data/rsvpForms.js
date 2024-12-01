import Fetch from '@11ty/eleventy-fetch';

export default async function () {
  let url = 'https://api.netlify.com/api/v1/sites/' + process.env.NETLIFY_SITE_KEY + '/submissions';

  let json = await Fetch(url, {
    duration: '1m',
    type: 'json',
    fetchOptions: {
      headers: {
        'Authorization': 'Bearer ' + process.env.NETLIFY_KEY
      },
    },
  });

 //  let url2 = 'https://api.netlify.com/api/v1/sites/' + process.env.NETLIFY_SITE_KEY + '/forms';
 //  
 //  let json2 = await Fetch(url2, {
 //    duration: '1m',
 //    type: 'json',
 //    fetchOptions: {
 //      headers: {
 //        'Authorization': 'Bearer ' + process.env.NETLIFY_KEY
 //      },
 //    },
 //  });
 //  
 //  // console.log(json2);
 //  let arr = [];
 // for (let obj in json2) {
 //   arr.push(json2[obj].name);
 //   fetch('https://api.netlify.com/api/v1/sites/' + process.env.NETLIFY_SITE_KEY + '/forms/' + json2[obj].name, {
 //     method: 'DELETE',
 //     headers: {Authorization: 'Bearer ' + process.env.NETLIFY_KEY}
 //   })
 // }
 // console.log(arr);
  return json;
};