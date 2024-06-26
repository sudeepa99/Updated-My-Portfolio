import React from 'react';
import "./Head.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ProfileImage from "../Images/2023_09_23_12_58_IMG_5343.JPG";

export default function Head() {
  return (
    <div>
      <div className='hero_sec'>
      <div className='head'>
        <div className='welcome_banner'>
          <p>Hello, Welcome</p>
        </div>
        <div className='intro'>
          <p>I'm Sudeepa Nisal</p>
        </div>
      </div>
      <div className='prof_img'>
      <Container>
      <Col xs={6} md={4}>
          <Image src={ProfileImage} className='img' rounded/>
        </Col>
      </Container>
          
      </div>

      </div>
      
      
    </div>
  )
}
