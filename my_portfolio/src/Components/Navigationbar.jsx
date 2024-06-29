import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigationbar.css";
import BrandName from "../Images/huge (1).png"
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Head from './Head';

export default function Navigationbar() {
  return (
    <div>
        <div>
        <Navbar className='nav_Bar'>
        <Container>
          <Image src={BrandName} alt='Brand Name'/>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" smooth duration={300}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth duration={300}>About</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth duration={300}>Skills</Nav.Link>
            <Nav.Link as={Link} to="portfolio" smooth duration={300}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="resume" smooth duration={300}>Resume</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth duration={300}>Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
        </div>

      
    </div>
  )
}
