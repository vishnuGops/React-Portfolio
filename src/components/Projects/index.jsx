import React from "react";
import Icon1 from "../../images/proj1.svg";
import Icon2 from "../../images/proj2.svg";
import Icon3 from "../../images/proj3.svg";
import Icon4 from "../../images/proj4.svg";
import Icon5 from "../../images/proj5.svg";
import Icon6 from "../../images/proj6.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH3,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
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
            {/* <ServicesP>you can acess our plataform online anywhere in the world.</ServicesP> */}
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Robot-Control-Via-Head-Gesture-Based-Interface">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>
              Robot control via Head Gesture based Interface
            </ServicesH2>
            {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Tweety-Twitter-Clone-using-React-JS">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>
              Tweety - Full Stack Social Media Web App using React js
            </ServicesH2>
            {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/GaryTheSelfDrivingBot">
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>
              Gary the Self Driving bot using Semantic Segmentation and Deep
              learning
            </ServicesH2>
            {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
          </ServicesCard>
        </a>
        <a href="https://github.com/vishnuGops/Advanced-Database---Cloud-Computing-Projects">
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>
              Advanced Database Projects using Spark, Pig, Hive, GraphX
            </ServicesH2>
            {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
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
