import React from "react";
import Icon1 from "../../images/uta.png";
import Icon2 from "../../images/bit.png";
// import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesDesc,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="education">
      <ServicesH1>Education</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>The University of Texas at Arlington</ServicesH2>
          <ServicesP>Aug 2019 - May 2021</ServicesP>
          <ServicesP>Arlington, Texas</ServicesP>
          <ServicesDesc>
            <b>Relevant Courses</b>
            <li>Autonomous Robotics / HCI</li>
            <li>Computer Vision / AI</li>
            <li>Advanced Database Systems</li>
            <li>Web Data Management</li>
            <li>Data Analysis</li>
            <li>Design of Algorithms</li>
            <li>Advanced Cloud Computing</li>
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Bangalore Institute of Technology</ServicesH2>
          <ServicesP>Jun 2015 - Jun 2019</ServicesP>
          <ServicesP>Bangalore, India</ServicesP>
          <ServicesDesc>
            <b>Relevant Courses</b>
            <li>Data Structures</li>
            <li>Operating Systems</li>
            <li>Machine Learning</li>
            <li>Computer Networks</li>
            <li>Computer Graphics</li>
            <li>Compilers</li>
            <li>Computer Architecture</li>
          </ServicesDesc>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
