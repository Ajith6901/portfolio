import React from 'react'
import  './Project_comp.css';
function Project_comp(props) {
  const ptr = "> ";
  const hypen = "- ";
  return (
    <div className='proj_comp_container'>
    <a><img src={props.image_url}/></a>
    <p className='proj_comp_title'>{props.name}</p>
    <div className='proj_comp_state'>
    <p>{ptr}{props.state1}</p>
    <p>{ptr}{props.state2}</p>
    <p>{ptr}{props.state3}</p>
    
    </div>
    <span className='proj_comp_link'>
      Link - <a className='url' href='/'>{props.github}</a>  </span> 
  
    
    </div>
  )
}

export default Project_comp