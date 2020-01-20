import React, { Component } from 'react';

import { addPost } from '../api/posts';
import PostForm from './PostForm';

class PostFormCreate extends Component {
  handleSubmit = post => {
    post.id = Date.now();
    addPost(post);
    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormCreate;