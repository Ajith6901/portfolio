import React from 'react';
import './Experience.css';
import ExperienceBox from '../ExperienceBox/ExperienceBox';
function Experience({x}) {
  
  
  return (
    <div className='ex_container'>
            <div className='ex_title'> {x}</div>
            <div className='ex_boxes'>
                {/* Experience Box */}
                <ExperienceBox
                heading={"Library development  intern "}
                stat1={" This internship was provided by the Application Library Engineering Group."}
                stat2={" Application  Library Engineering group is an open source community comprising of development enthusiast for HarmonyOS library development."}
                stat3={" As a part of this internship , I developed a Javascript Library for SmartBike console."}
                stat4={" Throughout this internship I was exposed to different tools used in real-life development scenarios."}
                stat5={" My Pull request was merged at the App lib github repository."}
                stat6={" As part of successful completion, I was even certified by the group."}
                />

                
                <ExperienceBox
                heading={" President of HMOS club - VIT AP"}
                stat1={" I was elected as the President for the  HarmonyOS student India at VIT-AP."}
                stat2={" As a part of this , we worked as a  team together and were successfull in establishing the new student club at our campus."}
                stat3={" We organised 10+ virtual events , Mobile hackathons and made over 10+ students to contribute to open source."}
                stat4={" The club was an extended part of the Application Library Engineering group .We had to use the resources provided by the community efficiently."}
                stat5={" We one of the most popular emerging clubs at our campus. "}
                stat6={" This Experience reveals that I am capable of  - leading a team efficiently , communicating with people and can handle situations tactfully."}
                />

                <ExperienceBox
                heading={" Web development intern "}
                stat1={" This internship was provided by The Sparks Foundation."}
                stat2={" The Sparks Foundation  is a community which provides students interships and as a part of it they have to create real-world projects."}
                stat3={" As a part of this internship , I developed a Basic Banking System."}
                stat4={" Throughout this project I have HTML  used several tools and technologies including HTML , CSS(Bootstrap) , Javascript , MySQL , PHP etc."}
                stat5={" The working project is shown below."}
                stat6={" As part of successful completion, I was even certified by the community."}
                />



                {/* <ExperienceBox/>
                <ExperienceBox/>
                <ExperienceBox/> */}
                {/* Experience Box */}
            </div>
    </div>
  );
};

export default Experience;