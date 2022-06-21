import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import InfoTwo from '../components/InfoTwo'
import { homeObjOne} from '../components/Info/Data';
import { homeObjTwo} from '../components/InfoTwo/Data';
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
      
      
      <InfoTwo {...homeObjTwo}/>
      {/* <InfoTwo {...homeObjThree}/> */}
      <Footer />
    </>
  )
}

export default Home
