import React from 'react';
import "./About.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import CoverIamge from "../Images/Cover_image.png";
import { motion } from 'framer-motion';


export default function About() {
  return (
    <div id='about'>
      <div className='About_section'>
      <div className="color_container">
        
      </div>

      <div className='cover_img'>
      <Container>
      <Col xs={6} md={4}>
    
          <motion.img
           src={CoverIamge}
           alt="Cover Image"
           initial={{ x: 0, opacity: 0.9 }}
           whileHover={{ x: 20, opacity: 0.7 }}
           transition={{ duration: 0.9, ease: "circOut" }}
           className='cover_img' rounded/>
        
          
        </Col>
      </Container>

      </div>

      <div className="about-sec">
        <h1 id='first'>About <span id='second'>Me</span></h1>
        <p id='third'>
        I'm an undergraduate at Sabaragamuwa University of Sri Lanka, studying software engineering. I absolutely love coding and solving problems. I get excited about taking on challenges and turning creative ideas into real, working solutions. With a passion for technology and an eye for detail, I'm eager to contribute to the tech world and make a difference. Whether it's building cool new apps or learning the latest programming trends, I'm always looking to grow and improve in this ever-evolving field.
        </p>

      </div>

      </div>
      
      
      
    </div>
  )
}
