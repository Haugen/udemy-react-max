import React from 'react';
import axios from 'axios';

import Post from './Post/Post';
import classes from './Posts.module.css';

class Posts extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(async response => {
        let posts = [];
        for (let i = 0; i < 3; i++) {
          let post = response.data[i];
          let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          post.author = user.data.name;
          posts.push(post);
        }
        this.setState({
          posts: posts
        })
      })
  }

  render() {
    let posts = [];
    let statePosts = this.state.posts;

    for (let i = 0; i < statePosts.length; i++) {
      posts.push(
        <Post
          key={statePosts[i].id}
          title={statePosts[i].title}
          body={statePosts[i].body}
          author={statePosts[i].author}
        />
      )
    }

    return(
      <>
        <div className={classes.Posts}>
          <h3>Some sample posts from the web using Axios</h3>
          {posts}
        </div>
      </>
    )
  }
}

export default Posts;