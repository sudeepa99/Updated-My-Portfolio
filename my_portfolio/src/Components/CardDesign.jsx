import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Portfolio.css";



export default function CardDesign(props) {
  return (
    <div className="card_animate" style={{marginTop: "4%", }}>
        <Card style={{ width: '24rem', height:'20rem', backgroundColor:'#111827' }}>
        <Card.Img style={{width:'24rem'  }} variant="top" src={props.Image_name}  />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Title style={{color:"#ffff", alignItems:"start"}}>{props.port_title} </Card.Title>
        <Button style={{
          backgroundColor: "#6B7280",
          borderColor:"black", 
          borderWidth:"2px",  
          textAlign: "center",
          marginTop: "2%",
          }}
          variant="primary"
          href={props.repo_link}
          
          >More Details
        </Button>
        </Card.Body>
        </Card>

      
    </div>
  )
}
