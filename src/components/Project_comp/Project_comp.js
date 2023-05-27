import React from 'react'
import  './Project_comp.css';
function Project_comp(props) {
  const ptr = "> ";
  const hypen = "- ";
  return (
    <div className='project_Comp_container'>
        <img src={props.image_url}/>
        
        <h1>{props.name}</h1>
        
        <p>{props.state1}</p>

        
        <p>{props.state2}</p>

        <p>{props.state3}</p>

        <p> <a href={props.github}>github</a></p>
        
        

    </div>
  );
}

export default Project_comp