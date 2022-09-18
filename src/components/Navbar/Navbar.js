import React from 'react'
import './Navbar.css';
export default function Navbar() {
    const x = "<AM/>"
    return (
    <div className='navbar_container'>
        <div className='left'> 
            {/* left Div  */}
            {x}
        </div>

        <div className='right'>
            <a href='/portfolio/src/file/Resume.pdf' download='Resume.pdf'>Resume</a>
            <a href=''>Tools</a>
            <a >Experience</a>
            <a>Projects</a>
            
            
            {/* right div */}

        </div>


    </div>
  )
}
