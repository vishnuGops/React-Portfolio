import React from "react";
import Icon1 from "../../images/proj1.svg";
import Icon2 from "../../images/proj2.svg";
import Icon3 from "../../images/proj3.svg";
import Icon4 from "../../images/proj4.svg";
import Icon5 from "../../images/proj5.svg";
import Icon6 from "../../images/proj6.svg";
import Icon7 from "../../images/proj7.svg";
import Icon8 from "../../images/proj8.svg";
import Icon9 from "../../images/proj9.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH3,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="project">
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <a href="https://github.com/vishnuGops/Detecting-MI-from-ECG-using-Echonet">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>
              Detecting MI from ECG using Computer Vision and ML
            </ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/EduSense-Face-Recognition-Attendance-System">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>EduSense Face Recognition Attendance System</ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Robot-Control-Via-Head-Gesture-Based-Interface">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>
              Robot control via Head Gesture based Interface
            </ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Activity-Influencer">
          <ServicesCard>
            <ServicesIcon src={Icon9} />
            <ServicesH2>Github Activity Influencer</ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Stock_Portfolio_Management">
          <ServicesCard>
            <ServicesIcon src={Icon8} />
            <ServicesH2>Stock Portfolio Management</ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Stock-Market-Analysis">
          <ServicesCard>
            <ServicesIcon src={Icon7} />
            <ServicesH2>
              Stock Market Analysis with Algorithmic Trading
            </ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Tweety-Twitter-Clone-using-React-JS">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>
              Tweety - Full Stack Social Media Web App using React js
            </ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/GaryTheSelfDrivingBot">
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>
              Gary the Self Driving bot using Semantic Segmentation and Deep
              learning
            </ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Advanced-Database---Cloud-Computing-Projects">
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>
              Advanced Database Projects using Spark, Pig, Hive, GraphX
            </ServicesH2>
          </ServicesCard>
        </a>
      </ServicesWrapper>
      <a href="https://github.com/vishnuGops">
        <ServicesH3>Click here to view my other Projects</ServicesH3>
      </a>
    </ServicesContainer>
  );
};

export default Services;
