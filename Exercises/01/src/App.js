import React, { Component, Fragment } from 'react';

import Post from './components/Post';

class App extends Component {
  state = {
    posts: [],
    page: 1,
  };

  componentDidMount() {
    fetch(`http://localhost:3001/posts/${this.state.page}`, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader',
      },
    }).then(res => res.json()).then(posts => this.setState({ posts: posts.data }));
  }

  componentDidUpdate() {
    fetch(`http://localhost:3001/posts/${this.state.page}`, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader',
      },
    }).then(res => res.json()).then(posts => this.setState({ posts: posts.data }));
  }

  handleNextClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }
  handlePrevClick = () => {
    this.setState((prevState) => {
      if (prevState.page === 1) {
        return { page: prevState.page };
      }
      return { page: prevState.page - 1 };
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
