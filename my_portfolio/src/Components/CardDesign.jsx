import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function CardDesign(props) {
  return (
    <div style={{marginTop: "4%"}}>
        <Card style={{ width: '24rem', height:'20rem', backgroundColor:'#111827' }}>
        <Card.Img style={{width:'24rem'  }} variant="top" src={props.Image_name}  />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Title style={{color:"#ffff", alignItems:"start"}}>{props.port_title} </Card.Title>
        <Button style={{
          backgroundColor: "#6B7280",
          borderColor:"black", 
          borderWidth:"2px",  
          textAlign: "center",
          marginTop: "2%" 
          }}
          variant="primary">More Details
        </Button>
        </Card.Body>
        </Card>

      
    </div>
  )
}
