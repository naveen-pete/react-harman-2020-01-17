import React, { Component } from 'react';

import { updatePost, getPost } from '../api/posts';
import PostForm from './PostForm';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const post = getPost(parseInt(id));
    this.setState({ post });
  }

  handleSubmit = post => {
    updatePost(post);
    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Update"
      post={this.state.post}
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormUpdate;