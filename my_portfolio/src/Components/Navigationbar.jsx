import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigationbar.css";
import BrandName from "../Images/huge (1).png"
import { Image } from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <div>
        <div>
        <Navbar className='nav_Bar'>
        <Container>
          <Image src={BrandName} alt='Brand Name'/>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
        </div>

      
    </div>
  )
}
