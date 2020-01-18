import React from 'react';

import Categories from './Categories';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import { posts, categoryAll } from '../data/store';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: posts,
      selectedCategory: categoryAll
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  handleCategorySelect(category) {
    this.setState({ selectedCategory: category });
  }

  handlePostCreate = newPost => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      };
    });
  }

  handlePostDelete(postId) {
    this.setState((prevState) => {
      const filteredPosts = prevState.posts.filter(p => p.id !== postId);
      return {
        posts: filteredPosts
      };
    });
  }

  render() {
    const { selectedCategory, posts } = this.state;

    let filteredPosts = [];
    if (selectedCategory.id !== 'all') {
      filteredPosts = posts.filter(p => p.category === selectedCategory.id);
    } else {
      filteredPosts = posts;
    }

    return <div className="row">
      <div className="col-3">
        <Categories
          onCategorySelect={this.handleCategorySelect} />
      </div>
      <div className="col-5">
        <h4>Posts</h4>
        {filteredPosts.map(p => <PostDetail
          key={p.id}
          post={p}
          onPostDelete={this.handlePostDelete}
        />)}
      </div>
      <div className="col">
        <PostForm onPostCreate={this.handlePostCreate} />
      </div>

    </div>;
  }
}

export default Posts;
