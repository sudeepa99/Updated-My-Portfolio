import React from 'react';
import "./Skills.css";
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { SiFlutter, SiDart, SiTailwindcss, SiC, SiJavascript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import HTML_logo from '../Icons/HTML5.png';
import CSS_logo from '../Icons/CSS3.png';
import TailwindCSS_logo from '../Icons/Tailwind CSS.png';
import JS_logo from '../Icons/JavaScript.png';
import ReactJS_logo from '../Icons/React.png';
import ReactBoot_logo from '../Icons/React Bootstrap.png';
import Dart_logo from '../Icons/Dart.png';
import Flutter_logo from '../Icons/Flutter.png';
import Spring_logo from '../Icons/Spring.png';
import NodeJS_logo from '../Icons/Node.js.png';
import MySQL_logo from '../Icons/MySQL.png';
import MongoDB_logo from '../Icons/MongoDB.png';
import Clang_logo from '../Icons/C.png';
import JavaLang_logo from '../Icons/Java.png';
import Skill_img from '../Images/skill_image-Photoroom.png';

import { Image } from 'react-bootstrap';





export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className="technology_section">
      <div className='skill_details'>
        <h1 id='skill_topic'><span id='other'>My</span> Skills</h1>
        <p id="skill_des">I have a vast experience in the following technologies and languages.</p>
      </div>
      <div className="techs">
        {/* HTML icon */}
      <div className='techitem'>
        <Image src={HTML_logo} alt='HTML' className='tech_icons'/>
        <p>HTML</p>
      </div>
      {/* Css Icon */}
      <div className='techitem'>
        <Image src={CSS_logo} alt='CSS' className='tech_icons'/>
        <p>CSS</p>
      </div>
      {/* TailwindCSS Icon*/}
      <div className='techitem'>
        <Image src={TailwindCSS_logo} alt='TailwindCSS' className='tech_icons'/>
        <p>Tailwind CSS</p>
      </div>
      {/* Js icon */}
      <div className='techitem'>
        <Image src={JS_logo} alt='JS' className='tech_icons'/>
        <p>JavaScript</p>
      </div>
      {/* ReactJS icon */}
      <div className='techitem'>
        <Image src={ReactJS_logo} alt='ReactJS' className='tech_icons'/>
        <p>ReactJS</p>
      </div>
      {/* React Bootstrap icon */}
      <div className='techitem'>
        <Image src={ReactBoot_logo} alt='ReactBootstrap' className='tech_icons'/>
        <p>React Bootstrap</p>
      </div>
      {/* Flutter icon */}
      <div className='techitem'>
        <Image src={Flutter_logo} alt='Flutter' className='tech_icons'/>
        <p>Flutter</p>
      </div>
      {/* Spring icon */}
      <div className='techitem'>
        <Image src={Spring_logo} alt='Springboot' className='tech_icons'/>
        <p>Spring</p>
      </div>
      {/* Nodejs icon */}
      <div className='techitem'>
        <Image src={NodeJS_logo} alt='NodeJS' className='tech_icons'/>
        <p>NodeJS</p>
      </div>
      {/* MySQL */}
      <div className='techitem'>
        <Image src={MySQL_logo} alt='MySQL' className='tech_icons'/>
        <p>MySQL</p>
      </div>
      {/* MongoDB */}
      <div className='techitem'>
        <Image src={MongoDB_logo} alt='MongoDB' className='tech_icons'/>
        <p>MongoDB</p>
      </div>
      {/* C language */}
      <div className='techitem'>
        <Image src={Clang_logo} alt='C Language' className='tech_icons'/>
        <p>C Language</p>
      </div>
      {/* Java Language */}
      <div className='techitem'>
        <Image src={JavaLang_logo} alt='Java Language' className='tech_icons'/>
        <p>Java Language</p>
      </div>
      {/* Dart icon */}
      <div className='techitem'>
        <Image src={Dart_logo} alt='Dart' className='tech_icons'/>
        <p>Dart Language</p>
      </div>
      </div>

      </div>
      

      <div className="skill_image">
        <Image src={Skill_img} alt='Image' className='skills_img'/>

      </div>
      
    </div>
  )
}
