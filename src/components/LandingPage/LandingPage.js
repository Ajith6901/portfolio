import React from 'react'
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
    <p className='LandingPagemyname'> <span className='highlight' >Hello, </span> my name is </p>
    <p className='landing_pageName'> Ajith M</p>
    <p className='designation'>I am final year  student at 
    <span className='highlight' > Vellore Institute Technology, Andhra Pradesh</span> 
    </p>
    
    <div className='description'>
        <p> I am a Computer Science student and I love working on Web development and Android projects .</p>
        {/* <p> I have developed projects in Android and Web development. </p> */}
        {/* <p> I love solving problems and have been actively solving problems in GFG(practice) and Hacker rank .</p> */}
        <p> I have interned at <span className='highlight'>Robert Bosch Ltd</span> as a  <span className='highlight' >Power Solutions developer </span>and developed multiple projects.</p>
        <p> Through out my academic career , I have carried out several <span className='highlight'> Leadership </span>roles and done <span className='highlight'> internships.</span>  </p>

    </div>

    <button className='btn'> 
        
        
        <a  href='mailto:ajithmviro@gmail.com'> Get in touch 
        </a>
        
        </button>
        <button className='btn' style={{marginLeft:10}}> 
        
        
        <a href="https://api.whatsapp.com/send?phone=8590546115&text=Hello this is the starting message">Whatsapp</a> 
        
        
        </button>
    </div>
  )
}

export default LandingPage