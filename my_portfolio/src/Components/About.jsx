import React from 'react';
import "./About.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import CoverIamge from "../Images/Cover_image.png";

export default function About() {
  return (
    <div>
      <div className='About_section'>
      <div className="color_container">
        
      </div>

      <div className='cover_img'>
      <Container>
      <Col xs={6} md={4}>
          <Image src={CoverIamge} className='cover_img' rounded/>
        </Col>
      </Container>

      </div>

      <div className="about-sec">
        <h1 id='first'>About <span id='second'>Us</span></h1>
        <p id='third'>
        I'm an undergraduate at Sabaragamuwa University of Sri Lanka with a passion for software engineering. Enthusiastic about coding and problem-solving, I'm eager to innovate and contribute to the tech world.
        </p>

      </div>

      </div>
      
      
      
    </div>
  )
}
