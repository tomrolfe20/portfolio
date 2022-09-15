import React from "react";
import styled from "styled-components";
import { useState } from "react";
import backgroundImage from "../images/portfolio.jpg";
import baliImg from "../images/bali.jpg";
import surfImg from "../images/surf.jpg";
import bjjImg from "../images/bjj.jpg";

import {
  ProjectsContainer,
  ProjectsTable,
  ProjectsImage,
  Img,
  ProjectsRightSide,
  ProjectsUnder,
  ImgContainer,
  ImgBox,
  ImgOverlay,
  ImgTitle,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsDesc,
  ProjectsIcons,
  ProjectsLinks,
  ProjectAlign,
} from "../layout/Layout";

const About = () => {
  const [mainImage, setMainImage] = useState(backgroundImage);
  const [title, setTitle] = useState("Tom Rolfe");
  const [desc, setDesc] = useState(
    "Here are a few words describing something about me. Check them out below."
  );
  const [icon, setIcon] = useState();
  const [link, setLink] = useState();

  const surf = "Surfing";
  const bali = "Bali";
  const bjj = "Brazilian Jiu Jitsu";
  const surfDesc = "Been surfing for the past 2 years";
  const baliDesc = "My dog Bali.";
  const bjjDesc = "Been doing for the past 6 months bla bla";

  function setProject1() {
    setMainImage(baliImg);
  }

  function setProject2() {
    setMainImage(surfImg);
  }

  function setProject3() {
    setMainImage(bjjImg);
  }

  return (
    <>
      <ProjectsContainer>
        <ProjectsTable>
          <ProjectAlign>
            {/* <ProjectsImage> */}
            <MainImg>
              <img src={mainImage} alt='alfresco' />
            </MainImg>
            {/* </ProjectsImage> */}
            <ProjectsRightSide>
              <ProjectsTitle>{title}</ProjectsTitle>
              <ProjectsSubtitle>
                Junior Front-End Developer - HTML5 | CSS | JavaScript | React
              </ProjectsSubtitle>
              <ProjectsDesc>{desc}</ProjectsDesc>
              <ProjectsLinks>
                <a href={link} target='_blank' rel='noreferrer'>
                  {link ? "Check it out here" : ""}
                </a>
              </ProjectsLinks>
              <ProjectsIcons>{icon}</ProjectsIcons>
            </ProjectsRightSide>
          </ProjectAlign>
          <ProjectsUnder>
            <ImgContainer>
              <ImgBox
                onClick={() => {
                  setProject1();
                }}
              >
                <Img>
                  <img src={baliImg} alt={bali} />
                </Img>
                <ImgOverlay>
                  <ImgTitle>{bali}</ImgTitle>
                </ImgOverlay>
              </ImgBox>

              <ImgBox
                onClick={() => {
                  setProject2();
                }}
              >
                <Img>
                  <img src={surfImg} alt={surf} />
                </Img>
                <ImgOverlay>
                  <ImgTitle>{surf}</ImgTitle>
                </ImgOverlay>
              </ImgBox>

              <ImgBox
                onClick={() => {
                  setProject3();
                }}
              >
                <Img>
                  <img src={bjjImg} alt={bjj} />
                </Img>
                <ImgOverlay>
                  <ImgTitle>{bjj}</ImgTitle>
                </ImgOverlay>
              </ImgBox>
            </ImgContainer>
          </ProjectsUnder>
        </ProjectsTable>
      </ProjectsContainer>
    </>
  );
};

export default About;

const MainImg = styled.div`

  img {
    border-right-style: solid;
  border-width: 5px;
  border-color: #1ab79c;
    max-width: 500px;
    @media screen {
      width: 100vw;
    }
  }
`;
