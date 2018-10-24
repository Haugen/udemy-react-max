import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts/Posts';
import PostFull from './components/Posts/Post/PostFull';
import PageNotFound from './util/PageNotFound/PageNotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <>
            <Switch>
              <Route path="/posts/:id" exact component={PostFull} />
              <Route path="/posts" exact component={Posts} />
              <Route path="/" exact component={BurgerBuilder} />
              <Route component={PageNotFound} />
            </Switch>
          </>
        </Layout>
      </Router>
    );
  }
}

export default App;
