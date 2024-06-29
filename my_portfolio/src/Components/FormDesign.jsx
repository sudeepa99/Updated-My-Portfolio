import React from 'react';
import Form from 'react-bootstrap/Form';
import "./FormDesign.css";


export default function FormDesign() {
  return (
    <div>
    <Form 
    style={{
        width:"100%",
        marginTop:"3%",
        }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='form_label'>Email address</Form.Label>
        <Form.Control className="mb-4" type="email" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='form_label'>Message</Form.Label>
        <Form.Control className="mb-4" as="textarea" placeholder="Enter message..."rows={3} />
      </Form.Group>
    </Form>
      
    </div>
  )
}
