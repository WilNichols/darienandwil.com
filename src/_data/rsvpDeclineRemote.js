import Fetch from '@11ty/eleventy-fetch';

export default async function () {
  let url = 'https://api.netlify.com/api/v1/forms/' + process.env.DECLINES_FORM + '/submissions';

  return await Fetch(url, {
    duration: '1m',
    type: 'json',
    fetchOptions: {
      headers: {
        'Authorization': 'Bearer ' + process.env.NETLIFY_KEY
      },
    },
  });
};