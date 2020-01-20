import React, { Component } from 'react';

import { addPost } from '../api/posts';
import PostForm from './PostForm';

class PostFormCreate extends Component {
  handleSubmit = post => {
    delete post.id;
    addPost(post)
      .then(newPost => {
        console.log('newPost:', newPost);
        this.props.history.push('/posts');
      })
      .catch(error => {
        console.log('Create post failed!');
        console.log('Error:', error);
      });
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormCreate;