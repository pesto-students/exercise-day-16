import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }
  componentDidMount() {
    fetch(`http://localhost:3001/posts/${this.state.page}`, { headers: { 'pesto-password': 'darth vader' } })
      .then(resp => resp.json()).then((recieved) => {
        this.setState({
          posts: recieved.data,
        });
      })
      .catch((rej) => { console.log(rej); });
  }
  componentWillUpdate() {
    fetch(`http://localhost:3001/posts/${this.state.page}`, { headers: { 'pesto-password': 'darth vader' } })
      .then(resp => resp.json()).then((recieved) => {
        this.setState({
          posts: recieved.data,
        });
      })
      .catch((rej) => { console.log(rej); });
  }
  handlePrevClick() {
    this.setState({
      page: this.state.page - 1,
    });
  }
  handleNextClick() {
    console.log(('nextclick'));
    this.setState({
      page: this.state.page + 1,
    });
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
                <Post post={post} />
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
