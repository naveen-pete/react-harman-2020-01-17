import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';

import PostDetail from './PostDetail';

const App = () => (
  <div className="container">
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/:id" component={PostDetail} />
    <Route path="/posts/:id/edit" component={PostFormUpdate} />
    <Route path="/new-post" component={PostFormCreate} />
  </div>
);

export default App;
