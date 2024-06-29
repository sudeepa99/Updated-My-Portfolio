import React from 'react';
import Form from 'react-bootstrap/Form';


export default function FormDesign() {
  return (
    <div>
    <Form 
    style={{
        width:"50%",
        marginTop:"3%"
        }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Enter message..."rows={3} />
      </Form.Group>
    </Form>
      
    </div>
  )
}
