import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';
import Landing from './Landing';
import SinglePost from './SinglePost';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ''
    };
  }

  componentDidMount() {
    axios.get('https://blogappapi.herokuapp.com/api/v1/posts').then(
      response => {
        this.setState({ post: response });
      },
      err => {
        if (err) {
          return console.log(err);
        }
      }
    );
  }

  FourOFour() {
   return (
      <h3>Page Not Found</h3>
    );
  }

  render() {

    let posts;

    if(this.state.post) {
      posts = this.state.post;
    }

    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/post/:id"
              component={props => {
                const { id } = props.match.params;
                const post = posts.data.find(info => info._id === id);

                return <SinglePost {...post} />;
              }}
            />
            <Route component={this.FourOFour}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const handle = document.getElementById('app');

render(<App />, handle);
