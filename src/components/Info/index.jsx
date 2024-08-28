import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Skills, BtnWrap, ImgWrap, Img } from './InfoElements';

const Info = ({lightBg, id, imgStart, topLine, lightText, headline1, headline2, headline3, darkText, description,skills,description2, buttonLabel, alt, img, primary, dark, dark2 }) => {
  // Split the description to handle content formatting
  // const [intro, skillsSection, outro] = description.split('🔧 Technical Skills:');

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline1}</Heading>
                <Heading lightText={lightText}>{headline2}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Skills darkText={darkText}>{skills}</Skills>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info;
