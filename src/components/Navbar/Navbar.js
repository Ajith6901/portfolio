import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const x = "<AM/>"
    return (
    <div className='navbar_container'>
        
        
        <div className='left'> 
            {/* left Div  */}
            <a href="/">{x}</a>
        </div>
        

        <div className='right'>
            <a href='https://drive.google.com/file/d/1n3xd6Fj22CdI971PJs4-Yr6Ydd0n9rAy/view?usp=sharing'>Resume</a>
            <a href='#tools'>Tools</a>
            <a href='#exp'>Experience</a>
            {/* <a href='#projects'>Projects</a> */}
            
            
            {/* right div */}

        </div>


    </div>
  )
}
