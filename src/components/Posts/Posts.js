import React from 'react';

import { jsonPlaceholder as axios } from '../../util/Axios/Axios';
import Post from './Post/Post';
import classes from './Posts.module.css';
import withErrorHandling from '../../util/WithErrorHandling/WithErrorHandling';
import Spinner from '../UI/Spinner/Spinner';

class Posts extends React.Component {
  state = {
    posts: [],
    fullPostId: null,
    fullPost: {},
    stop: false
  };

  componentDidMount() {
    axios.get('/posts').then(async response => {
      if (response) {
        let posts = [];
        for (let i = 0; i < 3; i++) {
          let post = response.data[i];
          let user = await axios.get(`/users/${post.userId}`);
          post.author = user.data.name;
          posts.push(post);
        }
        this.setState({
          posts: posts
        });
      }
    });
  }

  componentDidUpdate() {
    if (
      !this.state.stop &&
      this.state.fullPostId &&
      this.state.fullPostId !== this.state.fullPost.id
    ) {
      axios.get('/posts/' + this.state.fullPostId).then(response => {
        this.setState({
          fullPost: response.data,
          fullPostId: response.data.id
        });
      });
      this.setState({ stop: true });
    }
  }

  updateFullPostHandler = id => {
    // An example of navigating programatically instead of having a Link inside
    // each Post. Pushing a new URL into the history prop.
    this.props.history.push('/posts/' + id);
  };

  render() {
    let posts;
    let statePosts = this.state.posts;

    if (statePosts.length > 0) {
      posts = [];
      for (let i = 0; i < statePosts.length; i++) {
        posts.push(
          <Post
            key={statePosts[i].id}
            id={statePosts[i].id}
            title={statePosts[i].title}
            author={statePosts[i].author}
            changeFullPost={this.updateFullPostHandler}
          />
        );
      }
    } else {
      posts = <Spinner />;
    }

    return (
      <>
        <div className={classes.Posts}>{posts}</div>
      </>
    );
  }
}

export default withErrorHandling(Posts, axios);
