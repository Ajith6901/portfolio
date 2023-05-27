import React from 'react'
import './TechStack.css'
import {Link } from 'react-router-dom'; 
export default function TechStack({x}) {
  return (
    <div id='tools' className='ts_container'>
    
    <p className='ts_title'>Technical experience</p>

    <div className='ts_image'>

        
    <div>
        <img src='https://tse1.mm.bing.net/th?id=OIP.gKos1x79UQ8m55TuDjjvoQHaDt&pid=Api&rs=1&c=1&qlt=95&w=220&h=110'/>
        <p> Power Apps</p>
    </div>
       
    <div>
        <img src='https://tse1.mm.bing.net/th?id=OIP.7c4jVv5a2E3_HeZ4EDvyeQHaEc&pid=Api&rs=1&c=1&qlt=95&w=172&h=103'/>
        <p> Power Automate</p>
    </div>
       
    <div>
        <img src='data:image/png;base64,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'/>
        <p> Power Bi</p>
    </div>

    <div>
        <img src='https://harshit-portfolio99.web.app/static/media/html.cdf588f5.svg'/>
        <p> HTML</p>
    </div>

    <div>
        <img src='https://harshit-portfolio99.web.app/static/media/css.3ec32022.svg'/>
        <p> CSS</p>
    </div>

    <div>
        <img src='https://img.icons8.com/fluency/344/javascript.png'/>
        <p> JavaScript</p>
    </div>

    <div>
        <img src='https://harshit-portfolio99.web.app/static/media/react.37b2d287.svg'/>
        <p> React</p>
    </div>

    <div>
        <img src='https://img.icons8.com/color/344/git.png'/>
        <p> Git</p>
    </div>


    <div>
        <img src='https://img.icons8.com/color/344/android-studio--v3.png'/>
        <p> Android Studio</p>
    </div>

    <div>
        <img src='https://harshit-portfolio99.web.app/static/media/bootstrap.c64ac3ea.svg'/>
        <p> BootStrap</p>
    </div>

    <div>
        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png'/>
        <p> Java</p>
    </div>
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a8/Devecostudioicon.png'/>
        <p> Dev Eco Studio ( HarmonyOS )</p>
    </div>
    
    <div>
        <img src='https://img.icons8.com/fluency/344/mysql-logo.png'/>
        <p> MySQl</p>
    </div>
    
    </div>




    </div>
  )
}
