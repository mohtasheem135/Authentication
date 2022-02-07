import React from 'react';
import Nav from '../Nav/Nav';
import "./home.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";

const Home = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <Nav />
      <div className="slide-container">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
        >
          <div><img src={img1} className="slider-img" /></div>
          <div><img src={img2} className="slider-img" /></div>
          <div><img src={img3} className="slider-img" /></div>
          <div><img src={img4} className="slider-img" /></div>
          <div><img src={img5} className="slider-img" /></div>
        </AutoplaySlider>
      </div>
    </div>
  )
};

export default Home;
