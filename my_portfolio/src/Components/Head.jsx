import React from 'react';
import "./Head.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ProfileImage from "../Images/profile-img.png";
import { motion } from 'framer-motion';

export default function Head() {
  return (
    <div id='home'>
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
          <motion.img 
          src={ProfileImage}
          alt="Profile Image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className='img' rounded
          />
        </Col>
      </Container>
          
      </div>
      <div className="color_container2"></div>

      </div>
      
      
    </div>
  )
}
