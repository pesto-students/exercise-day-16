import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    if (!localStorage.getItem('page')) {
      localStorage.setItem('page', 1);
    }
    this.fetchPosts();
  }

  state = {
    posts: [],
  };

  onPostClick = (event) => {
    // event.persist();
    console.log(event.currentTarget.dataset.id);
  }

  getPostItem = () => {
    const db = window.indexedDB.open();
    const trans = db.transaction('posts');
    const objectStore = trans.objectStore('post');
    const request = objectStore.get('1');
  }

  fetchPosts = () => {
    const instance = this;
    const pageNumber = localStorage.getItem('page');

    fetch(`http://localhost:3001/posts/${pageNumber}`, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader',
      },
    }).then(response => response.json()).then((res) => {
      instance.updatePosts(res.data);
    });
  }

  updatePosts(data) {
    this.setState({
      posts: data,
    });
  }

  handlePrevClick = () => {
    const pageNumber = localStorage.getItem('page');
    if (Number(pageNumber) > 1) {
      localStorage.setItem('page', Number(pageNumber) - 1);
    }
    this.fetchPosts();
  }

  handleNextClick = () => {
    const pageNumber = localStorage.getItem('page');
    localStorage.setItem('page', Number(pageNumber) + 1);
    this.fetchPosts();
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {this.state.posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <Post post={post} onPostClick={this.onPostClick} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
