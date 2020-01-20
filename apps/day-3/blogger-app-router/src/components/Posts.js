import React from 'react';
import { Link } from 'react-router-dom';

import Categories from './Categories';
// import { posts, categoryAll } from '../data/store';
import { categoryAll } from '../constants';
import { getPosts, deletePost } from '../api/posts';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      selectedCategory: categoryAll
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    getPosts()
      .then(posts => {
        this.setState({ posts });
      })
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      });
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

  handleDeleteClick(postId) {
    deletePost(postId);

    this.setState((prevState) => {
      const filteredPosts = prevState.posts.filter(p => p.id !== postId);
      return {
        posts: filteredPosts
      };
    });
  }

  renderPosts(filteredPosts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map(p => <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.author}</td>
          <td>{p.category}</td>
          <td>
            <div className="btn-group btn-group-sm">
              <Link className="btn btn-info" to={`/posts/${p.id}`}>View </Link>
              <Link className="btn btn-warning" to={`/posts/${p.id}/edit`}>Edit</Link>
              <button className="btn btn-danger" onClick={() => this.handleDeleteClick(p.id)}>Delete</button>
            </div>
          </td>
        </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
    const { selectedCategory, posts } = this.state;

    if (posts.length <= 0) {
      return <div>Loading...</div>;
    }

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
      <div className="col">
        <h4>Posts</h4>
        {filteredPosts.length > 0
          ? this.renderPosts(filteredPosts)
          : <div className="alert alert-info">No posts.</div>
        }

      </div>
    </div>;
  }
}

export default Posts;
