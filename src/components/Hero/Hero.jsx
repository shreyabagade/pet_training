import React from 'react';
import { images } from '../../constants';
import './Hero.css';


const Hero = () => {

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Training and behavior</h1>
          <p className="py-4">Training and managing the behavior of your beloved dogs and cats is essential for creating a happy and harmonious home environment. Whether you're a new pet owner or have been caring for your furry companions for years, it's never too late to start training and reinforcing positive behaviors. In this section, we'll provide you with valuable insights, tips, and techniques to ensure your dogs and cats are well-behaved, healthy, and content.</p>
          <button className="btn-positivus">Make an appointment</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      </div>
        
  )
}

export default Hero