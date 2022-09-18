import React from 'react'
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
    <p className='LandingPagemyname'> <span className='highlight' >Hello, </span> my name is </p>
    <p className='landing_pageName'> Ajith M</p>
    <p className='designation'>I am undergrad student at 
    <span className='highlight' > VIT-AP</span> 
    </p>
    
    <div className='description'>
        <p> I am a Computer Science student and I love working on Web development and Android projects .</p>
        <p> I have developed projects in Android and Web development. </p>
        {/* <p> I love solving problems and have been actively solving problems in GFG(practice) and Hacker rank .</p> */}
        <p> I have <span className='highlight'>5 star rating</span> in HackerRank and solved <span className='highlight' >100+</span> problems in GFG.</p>
        <p> Through out my academic career , I have carried out several <span className='highlight'> Leadership </span>roles and done <span className='highlight'> internships.</span>  </p>

    </div>

    <button className='btn'> 
        
        
        <a  href='mailto:ajithmviro@gmail.com'> Get in touch 
        </a>
        
        </button>
    </div>
  )
}

export default LandingPage