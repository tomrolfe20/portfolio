import React from "react";
import styled from "styled-components";
import { useState } from "react";
import backgroundImage from "../images/default.png";
import impact from "../images/impact.png";
import charlotte from "../images/charlotte.png";
import eventmaster from "../images/eventmaster.png";
import wordpress from "../images/icons/wordpress.svg";
import css from "../images/icons/css3-alt.svg";
import github from "../images/icons/github.svg";
import html5 from "../images/icons/html5.svg";
import react from "../images/icons/react.svg";
import js from "../images/icons/square-js.svg";

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
  ProjectAlign
} from "../layout/Layout";

const Projects = () => {
  const [mainImage, setMainImage] = useState(backgroundImage);
  const [title, setTitle] = useState("Portfolio of projects");
  const [desc, setDesc] = useState(
    "Here are a few examples of some of the projects i've been working on. Check them out below."
  );
  const [icon, setIcon] = useState();
  const [link, setLink] = useState();

  const charlotteTitle = "Charlotte-Writes";
  const impactTitle = "Impact Bars";
  const eventmasterTitle = "Event Master";
  const charlotteDesc =
    "Made in Word Press for Charlotte, a travel writer for the National Geographic who wanted to be able to update her blog and post her articles on her laptop with ease from her travels.";
  const impactDesc =
    "Made in React and written from scratch. A simple website, attractive and functional.";
  const eventmasterDesc =
    "Event Master was created from my experience in the festival industry and noticing a lack of available platforms that manage the recruitment of staff all the way through to managing their hours in the field to processing their payroll post event. I didn't write any of the code for this platform but I was heavily involved in the design and testing phases when creating this start up.";

  function setProject1() {
    setTitle(`${impactTitle}`);
    setMainImage(impact);
    setDesc(`${impactDesc}`);
    setIcon(
      <>
        <img src={html5} alt='html5' />
        <img src={css} alt='css' />
        <img src={js} alt='js' />
        <img src={github} alt='github' />
        <img src={react} alt='react' />
      </>
    );
    setLink("https://tomrolfe20.github.io/impactbarswebsite/");
  }

  function setProject2() {
    setTitle(`${charlotteTitle}`);
    setMainImage(charlotte);
    setDesc(`${charlotteDesc}`);
    setIcon(
      <>
        <img src={wordpress} alt='wordpress' />
      </>
    );
    setLink("https://charlotte-writes.co.uk/");
  }

  function setProject3() {
    setTitle(`${eventmasterTitle}`);
    setMainImage(eventmaster);
    setDesc(`${eventmasterDesc}`);
    setIcon();
    setLink("https://eventmaster.jobs/");
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
                  <img src={impact} alt={impactTitle} />
                </Img>
                <ImgOverlay>
                  <ImgTitle>{impactTitle}</ImgTitle>
                </ImgOverlay>
              </ImgBox>

              <ImgBox
                onClick={() => {
                  setProject2();
                }}
              >
                <Img>
                  <img src={charlotte} alt={charlotteTitle} />
                </Img>
                <ImgOverlay>
                  <ImgTitle>{charlotteTitle}</ImgTitle>
                </ImgOverlay>
              </ImgBox>

              <ImgBox
                onClick={() => {
                  setProject3();
                }}
              >
                <Img>
                  <img src={eventmaster} alt={eventmasterTitle} />
                </Img>
                <ImgOverlay>
                  <ImgTitle>{eventmasterTitle}</ImgTitle>
                </ImgOverlay>
              </ImgBox>
            </ImgContainer>
          </ProjectsUnder>
        </ProjectsTable>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

const MainImg = styled.div`

  img {
    border-right-style: solid;
  border-width: 5px;
  border-color: #1ab79c;
    max-width: 500px;
    @media screen {
     width : 100vw;
    }
  }
`;
