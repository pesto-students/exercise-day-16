import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post, onPostClick }) => {
  return (
    // eslint-disable-next-line
    <div key={post.id} data-id={post.id} onClick={onPostClick}>
      <h4>{post.id}</h4>
      <div>Title: {post.title}</div>
      {post.body ? <div>Body: {post.body}</div> : null}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }).isRequired,
  onPostClick: PropTypes.func.isRequired,
};

export default Post;
