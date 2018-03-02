import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Header from './Header';
import SideBar from './SideBar';
import Posts from './Posts';
import Footer from './Footer';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ''
    };
  }

  componentDidMount() {
    axios.get('https://blogappapi.herokuapp.com/api/v1/posts').then(
      response => {
        this.setState({ posts: response.data });
      },
      err => {
        if (err) {
          return console.log(err);
        }
      }
    );
  }

  render() {

    let posts, gif;

    if(this.state.posts) {
      posts = this.state.posts;
    } else {
      gif = <img alt="" src="../public/pleasewait.gif"/>
    }

    return (
      <div className="landing">
        <Nav />
        <Header />
        <div className="container">
          <div className="row">
            {gif}
            <Posts data={posts} />
            <SideBar />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Landing;
