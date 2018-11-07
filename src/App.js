import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import PostFull from './components/Posts/Post/PostFull';
import PageNotFound from './util/PageNotFound/PageNotFound';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <>
            <Switch>
              <Route path="/posts/:id" exact component={PostFull} />
              <Route path="/posts" exact component={Posts} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/sign-up" exact component={Auth} />
              <Route path="/sign-in" exact component={Auth} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/checkout" component={Checkout} />
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
