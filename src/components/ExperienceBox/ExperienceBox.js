import React from 'react'
import './ExperienceBox.css'
function ExperienceBox(props) {
  
  const arrow = "> ";
  return (
    <div className='experience_box'>
      
      <p className='expBoxTitle'>{props.heading}</p>
      <div>
        
        <p>{arrow} {props.stat1}</p>
        <p>{arrow} {props.stat2}</p>
        <p>{arrow} {props.stat3}</p>
        <p>{arrow} {props.stat4}</p>
        <p>{arrow} {props.stat5}</p>
        <p>{arrow} {props.stat6}</p>
      </div>

      
        

      </div>
  )
}

export default ExperienceBox;