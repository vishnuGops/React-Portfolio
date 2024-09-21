import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import InfoTwo from "../components/InfoTwo";
import { homeObjOne } from "../components/Info/Data";
import { homeObjTwo } from "../components/InfoTwo/Data";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Sidebar from "../components/SideBar";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <Hero />
      <Info {...homeObjOne} />
      <Experience />
      <Education />
      <Projects />
      <InfoTwo {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
