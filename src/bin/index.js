const fetch = require('node-fetch');
const fs = require('fs');
let postsObj = require('../routes/blog/_posts.json');
require('dotenv').config();

const GHOST_API_URL = process.env.GHOST_API_URL;

const writeFile = (obj) => {
  const parsedData = JSON.stringify(obj);
  fs.writeFileSync('./src/routes/blog/_posts.json', parsedData);
  console.log('Data has been saved!');
};

const fetchData = async () => {
  const response = await fetch(GHOST_API_URL);
  const data = await response.json();
  const posts = await data.posts.map((post) => ({
    title: post.title,
    html: post.html,
    slug: post.slug,
    createdAt: post.created_at,
    id: post.id,
    desc: post.excerpt,
    tag: post.meta_title,
    image: post.feature_image,
    ...post,
  }));

  if (postsObj.length >= 15) {
    if (posts[0].title === postsObj[0].title) {
      postsObj.shift();
      postsObj.unshift(posts[0]);
    } else {
      postsObj.unshift(posts[0]);
      writeFile(postsObj);
    }
  } else {
    writeFile(posts);
  }
};

fetchData();
