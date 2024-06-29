import React from 'react';
import "./Contact.css";
import FormDesign from './FormDesign';
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className='contact_sec'>
      <div className='contact_container'>
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

      

      
    </div>
  )
}
