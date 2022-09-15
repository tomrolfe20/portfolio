import React from "react";
import styled from "styled-components";
import bgWall from "../images/bluewall.jpg";
import {
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsDesc,
  ProjectsIcons,
  ProjectsLinks,
} from "../layout/Layout";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <TitleBox>
          <ProjectsTitle>Tom Rolfe</ProjectsTitle>
          <ProjectsSubtitle>
            Junior Front-End Developer - HTML5 | CSS | JavaScript | React
          </ProjectsSubtitle>
          <ProjectsDesc>Available for work.</ProjectsDesc>
        </TitleBox>
      </HeroContainer>
    </>
  );
};

export default Hero;

const HeroContainer = styled.div`
  min-height: calc(100vh - 50px);
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),
    url(${bgWall});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: left;
  padding-top: 180px;
  padding-left: 300px;

  @media screen and (max-width: 480px) {
  margin: 30px;
  padding-top: 80px;
  padding-left: 30px;
  }
`;
