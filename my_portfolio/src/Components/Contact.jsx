import React from 'react';
import "./Contact.css";
import FormDesign from './FormDesign';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className='contact_sec' id='contact'>
      <div className='contact_container'>
      
      <div className='column1'>
      <h1 className='contact_head'><span id='other'>Contact</span> Me</h1>
      <FormDesign/>
      <div style={{marginLeft:"22%"}}>
      <Button
      style={{
        backgroundColor: "#6B7280",
          borderColor:"#ffff", 
          borderWidth:"2px",  
          textAlign: "center",
          marginTop: "1%" 
      }}
      >Submit</Button>
      </div>

      </div>
      <div className="column2">
      <ul className="contact-list2">
        <li>
          <strong id='contact_label'>Email:</strong> <a href="sudeepa1234nisal@gmail.com">sudeepa1234nisal@gmail.com</a>
        </li>
        <li>
          <strong id='contact_label'>Address:</strong> <p id='para'>Pahalawakanda,Kalawana</p>
        </li>
        <li>
          <strong id='contact_label'>Phone:</strong> <a href="0771576866">0771576866</a>
        </li>
        <li>
          <strong id='contact_label'>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sudeepa-nisal/" target="_blank" rel="noopener noreferrer">Sudeepa-Nisal</a>
        </li>
        <li>
          <strong id='contact_label'>GitHub:</strong> <a href="https://github.com/sudeepa99" target="_blank" rel="noopener noreferrer">Sudeepa99</a>
        </li>
      </ul>
    </div>
      
      {/* <div>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <ListGroup className="justify-content-center">
            <ListGroup.Item className='group_list'>
              <strong><span id='contact_label'>Email:</span></strong> <a  href="sudeepa1234nisal@gmail.com">sudeepa1234nisal@gmail.com</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong><span id='contact_label'>Address:</span></strong><p>Pahalawakanda, Kalawana</p> 
            </ListGroup.Item>
            <ListGroup.Item>
              <strong><span id='contact_label'>Phone:</span></strong> <a href="0771576866">0771576866</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong><span id='contact_label'>LinkedIn:</span></strong> <a href="https://www.linkedin.com/in/sudeepa-nisal/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sudeepa-nisal/</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong><span id='contact_label'>GitHub:</span></strong> <a href="https://github.com/sudeepa99" target="_blank" rel="noopener noreferrer">github.com/yourprofile</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      </div>  */}
      

      </div>

      

      
    </div>
  )
}
