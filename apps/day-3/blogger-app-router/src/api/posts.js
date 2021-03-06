import { posts } from '../data/store';

const apiUrl = 'http://localhost:3001/posts';

export const getPosts = () => {
  return fetch(apiUrl)
    .then(response => response.json());
};

export const getPost = id => {
  const post = posts.find(p => p.id === id);
  return post;
};

export const addPost = post => {
  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
      'my-auth-token': 'abc123'
    }
  })
    .then(response => response.json());
};

export const updatePost = post => {
  const postToUpdate = posts.find(p => p.id === post.id);

  if (postToUpdate) {
    const { title, body, author, category } = post;
    postToUpdate.title = title;
    postToUpdate.body = body;
    postToUpdate.author = author;
    postToUpdate.category = category;
  }
};

export const deletePost = id => {
  const index = posts.findIndex(p => p.id === id);
  if (index >= 0) {
    posts.splice(index, 1);
  }
};
