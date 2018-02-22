import React from 'react';
import Nav from './Nav';
import Header from './Header';
import SideBar from './SideBar';
import Posts from './Posts';
import Footer from './Footer';

const Landing = () => (
  <div className="landing">
    <Nav/>
    <Header/>
    <div className="container">
    	<div className="row">
    		<Posts />
    		<SideBar/>
    	</div>
    </div>
    
    <Footer/>

  </div>
);

export default Landing;
