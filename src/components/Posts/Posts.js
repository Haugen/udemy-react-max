import React from 'react';
import axios from 'axios';

import Post from './Post/Post';
import FullPost from './FullPost/FullPost';
import classes from './Posts.module.css';

class Posts extends React.Component {
  state = {
    posts: [],
    fullPostId: null,
    fullPost: {}
  }

  componentDidMount() {
    axios.get('/posts')
      .then(async response => {
        let posts = [];
        for (let i = 0; i < 3; i++) {
          let post = response.data[i];
          let user = await axios.get(`/users/${post.userId}`)
          post.author = user.data.name;
          posts.push(post);
        }
        this.setState({
          posts: posts
        })
      })
  }

  componentDidUpdate() {
    if (this.state.fullPostId && this.state.fullPostId !== this.state.fullPost.id) {
      axios.get('/posts/' + this.state.fullPostId)
        .then(response => {
          this.setState({
            fullPost: response.data,
            fullPostId: response.data.id
          })
        })
    }
  }

  updateFullPostHandler = id => {
    this.setState({
      fullPostId: id
    })
  }

  render() {
    let posts = [];
    let statePosts = this.state.posts;

    for (let i = 0; i < statePosts.length; i++) {
      posts.push(
        <Post
          key={statePosts[i].id}
          id={statePosts[i].id}
          title={statePosts[i].title}
          author={statePosts[i].author}
          changeFullPost={this.updateFullPostHandler}
        />
      )
    }

    return(
      <>
        <div className={classes.Posts}>
          <FullPost post={this.state.fullPost} />
          {posts}
        </div>
      </>
    )
  }
}

export default Posts;