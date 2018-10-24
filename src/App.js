import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Posts from './components/Posts/Posts';
import PostFull from './components/Posts/Post/PostFull';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/:id" exact component={PostFull} />
          </>
        </Layout>
      </Router>
    );
  }
}

export default App;
