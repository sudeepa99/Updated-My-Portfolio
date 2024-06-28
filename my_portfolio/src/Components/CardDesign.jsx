import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function CardDesign(props) {
  return (
    <div>
        <Card style={{ width: '24rem', height:'24rem', backgroundColor:'#111827' }}>
        <Card.Img style={{width:'24rem'  }} variant="top" src={props.Image_name}  />
        <Card.Body>
        <Card.Title style={{color:"#ffff"}}>{props.port_title}</Card.Title>
        <Button variant="primary">More Details</Button>
        </Card.Body>
        </Card>

      
    </div>
  )
}
