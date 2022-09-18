import React from 'react'
import './Projects.css';
import Project_comp from '../Project_comp/Project_comp';
function Projects() {
  return (
    <div className='projects_container'>
        <div className='projects_title'>Project </div>
        {/* Projects heading */}
        
        <div className='Project_comp_container'>
        <Project_comp
        image_url="../../images/portfolio.png"
        name="E-Commerce Website Clone"
        state1="This is state1"
        state2="This is state1"
        state3="This is state1"
        github="https://github.com/Ajith6901/AmazonClone"
        
        />
        {/* <Project_comp/>
        <Project_comp/> */}



        {/* https://github.com/Ajith6901/AmazonClone */}


        {/* https://ajithmvirgo2.000webhostapp.com/ */}


        {/* https://github.com/applibgroup/Prefs*/}

        {/* https://github.com/Applib-OpenHarmony/SmartBike */}

        {/* https://github.com/Ajith6901/AmazonClone */}

        {/* https://github.com/Ajith6901/NewsApp */}

        </div>
        


    </div>
  )
}

export default Projects