import React from 'react';

import classes from './Post.module.css';
import { withRouter } from 'react-router-dom';
import { jsonPlaceholder as axios } from '../../../util/Axios/Axios';
import { Link } from 'react-router-dom';

class postFull extends React.Component {
  state = {
    fullPost: null
  };

  componentDidMount() {
    axios.get(`/posts/${this.props.match.params.id}`).then(async response => {
      let author = await axios.get(`/users/${response.data.userId}`);
      response.data.author = author.data.name;
      this.setState({ fullPost: response.data });
    });
  }

  render() {
    let post;
    if (this.state.fullPost) {
      post = (
        <div className={classes.FullPost}>
          <Link to="/posts">
            <strong>Back to posts</strong>
          </Link>
          <h2>{this.state.fullPost.title}</h2>
          <p>{this.state.fullPost.body}</p>
          <small>Author: {this.state.fullPost.author}</small>
        </div>
      );
    }

    return <>{post}</>;
  }
}

export default withRouter(postFull);
