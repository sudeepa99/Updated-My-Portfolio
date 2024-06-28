import React from 'react';
import "./Portfolio.css";
import CardDesign from './CardDesign';
import StockMngImg from "../Images/stock_mng.png";
import FilmBookImg from "../Images/film_booking.png";
import MyPortImg from "../Images/Portfolio.png";
import Carex from "../Images/carex.png";

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
      
    </div>
  )
}
