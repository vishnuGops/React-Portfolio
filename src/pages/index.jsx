import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Experience />
      <Education />
      {/* <Info {...homeObjTwo}/> */}
      <Projects />
      
      
      <Info {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home
