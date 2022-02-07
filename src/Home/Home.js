import React from 'react';
import Nav from '../Nav/Nav';
import "./home.css";
import { Wave } from 'react-animated-text';
import { Random } from 'react-animated-text';

const Home = () => {

  
  return (
    <div>
      <Nav />
      <div className="home-txt">
      
      <h1 className="home-head-txt"><Wave effect="stretch" effectChange={1.7} text="This is the Home please Login to enter..." /></h1>

      </div>
    </div>
  )
};

export default Home;
