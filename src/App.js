import react from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';

import EXP from './components/Experience/Experience';
function App(){
  
  const exp = "Experience";
  return (
    <div className='app_container'>
      <Navbar/>
      <LandingPage/>
      <TechStack/>
      <EXP x={exp}/>
      {/* <Projects/> */}
    </div>
  )
}
export default App; // exporting this function so that it could be used 