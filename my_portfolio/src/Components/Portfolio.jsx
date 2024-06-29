import React from 'react';
import "./Portfolio.css";
import CardDesign from './CardDesign';
import StockMngImg from "../Images/stock_mng.png";
import FilmBookImg from "../Images/film_booking.png";
import MyPortImg from "../Images/Portfolio.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


export default function Portfolio() {
  return (
    <div className='po_section'>
      <div className='po_head'>
        <h1>Portfolio</h1>
      </div>
      <div className='card_container'>
        <CardDesign Image_name={StockMngImg} port_title="Stock Management System"/>
        <CardDesign Image_name={FilmBookImg} port_title="Film Booking Website"/>
        <CardDesign Image_name={MyPortImg} port_title="My portfolio"/>
      </div>
      <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop:"2%"
      
      }}>
        <Button 
        style={{
        backgroundColor:"#6B7280",
        borderColor:"black", 
        borderWidth:"2px",
        }}
        variant='primary'>See More
        <FontAwesomeIcon icon={faAngleDoubleRight} 
        style={{
        marginLeft:"4px",
        }}/>
        </Button>
      
      </div>
      
    </div>
  )
}
