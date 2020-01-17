import React from 'react';

import Categories from './Categories';
import PostDetail from './PostDetail';
import { posts } from '../data/store';

const Posts = () => {
  return <div className="row">
    <div className="col-3">
      <Categories />
    </div>
    <div className="col">
      <h4>Posts</h4>
      {posts.map(p => <PostDetail key={p.id} post={p} />)}
    </div>

  </div>;
};

export default Posts;
