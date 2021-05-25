import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesP2 ,ServicesDesc} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='experience'>
      <ServicesH1>Experience</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Serotonin Labs. Inc</ServicesH2>
          <ServicesP>Software Engineering Intern</ServicesP>
          <ServicesP2>San Francisco, CA</ServicesP2>
          <ServicesP2>June 2020 – Aug 2020</ServicesP2>
          
          <ServicesDesc>
            <li>Worked on Full stack development and Data Visualization of user dashboards related to Supplement consumption and activity measurement.</li>
            <li>Worked on ML Model to analyze resting heart rate of 100+ real time users every night in order to form a heart rate pattern.</li>
            <li>Model matches the pattern with pre-determined patterns in order to analyze the sleep cycle of the user and display this analysed result on the Web app interface for user to see.</li>
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Tata Advanced Systems Limited</ServicesH2>
          <ServicesP>Software Engineer</ServicesP>
          <ServicesP2>Bangalore, IN</ServicesP2>
          <ServicesP2>Jan 2019 – Mar 2019</ServicesP2>
          <ServicesDesc>
            <li>Worked along with a team to complete the Autopilot System called AP Swarm</li>
            <li>Worked on developing code for the Communications and Calibrations of the Autopilot System using C++. Developed code to successfully send and retrieve required flight data from Drone using Embedded sensors and High-end SoC like Inertial Sense and Apalis Tk1.</li>
            <li>Collaborated with different teams using Agile Software practices to determine requirements and solutions in order to effectively build Auto Pilot AP Swarm</li>
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Avian Aerospace</ServicesH2>
          <ServicesP>Software Engineering Intern</ServicesP>
          <ServicesP2>Bangalore, IN</ServicesP2>
          <ServicesP2>Dec 2017 – Feb 2018</ServicesP2>
          <ServicesDesc>
            <li>Research and building of a Quad-copter using 3D-Printer. Worked on projects using Open CV and Python. Developed a basic Mobile Application to control Robot car via Bluetooth.</li>
            <li>Developed multiple Computer Vision functionality and features for ground bot and drone using OpenCV and ROS.</li>
            <li>Various CV functions developed: Shape Detection, Pattern and Road Sign Detection, Face Detection, Line Follow,Drone controlled using remote controller, “Master and Slave Robotics using Ground bot and Drone” (Main Project)</li>
          </ServicesDesc>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
