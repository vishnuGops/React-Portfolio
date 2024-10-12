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
  ServicesH3,
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
          <ServicesH1></ServicesH1>
          <ServicesH3>
            The University of Texas at Arlington (UTA or UT Arlington) is a
            public research university in Arlington, Texas. The university was
            founded in 1895 and was in the Texas A&M University System for
            several decades until joining the University of Texas System in
            1965. The university is classified among "R1: Doctoral Universities
            – Very high research activity".The fall 2022 campus enrollment
            consisted of 40,990 students making it the second largest university
            in North Texas and fifth-largest in Texas.UT Arlington is the
            third-largest producer of college graduates in Texas and offers over
            180 baccalaureate, masters, and doctoral degree programs.UT
            Arlington participates in 15 intercollegiate sports as a Division I
            member of the NCAA and Western Athletic Conference. UTA sports teams
            have been known as the Mavericks since 1971.
          </ServicesH3>
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
          <ServicesH1></ServicesH1>
          <ServicesH3>
            BIT is currently affiliated to VTU. The institute offers Bachelor of
            Engineering degrees in Artificial Intelligence & Machine Learning,
            Computer Science, Electronics, Telecommunication, Instrumentation
            Technology, Electrical, Civil and Mechanical, Information Science
            and Engineering, Industrial Engineering and Management. It is
            recognized by the AICTE and NBA.BIT offers 10 undergraduate, 10 post
            graduate including MBA & MCA and PhD courses. There are a number of
            centres carrying out inter-disciplinary research and collaborative
            programmes exist between the college and the Institute of Science
            (IISc) and National Aerospace Laboratories (N.A.L.).
          </ServicesH3>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
