import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

class PostContainer extends Component {
  state = {
    post: {},
    postID: this.props.match.params.id,
  }
  componentDidMount() {
    fetch(`http://localhost:3001/post/${this.state.postID}`, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader',
      },
    }).then(res => res.json()).then(post => this.setState({ post: post.data }));
  }
  render() {
    return (
      this.state.post ? <Post post={this.state.post} /> : <Post post={{ id: this.state.postID }} />
    );
  }
}

PostContainer.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default PostContainer;
