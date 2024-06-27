import React from 'react';
import "./Homepage.css";
import Navigationbar from '../Components/Navigationbar';
import Head from '../Components/Head';
import { AbortedDeferredError } from 'react-router-dom';
import About from '../Components/About';
import Skills from '../Components/Skills';

export default function Homepage() {
  return (
    <div className='body'>
        <Navigationbar/>
        <Head/>
        <About/>
        <Skills/>
      
    </div>
  )
}
