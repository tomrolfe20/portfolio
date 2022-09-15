import styled from "styled-components";
import bgWall from "../images/bluewall.jpg";

export const ProjectsContainer = styled.div`
  min-height: calc(100vh - 50px);
  /* background-color: red; */
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),
    url(${bgWall});
  background-position: center;
  background-size: cover;
`;

export const ProjectsTable = styled.div`

  



`;
// export const ProjectsImage = styled.div`

//   background-color: red;
// `;
export const ProjectsRightSide = styled.div`
  


  /* background-color: purple; */
  max-width: 500px;
  max-height: 300px;
  padding: 30px;

`;

export const ProjectAlign = styled.div`
display: flex;
flex-direction: row;

@media screen and (max-width: 440px) {
  flex-direction: column;
}
`

export const ProjectsUnder = styled.div`
  /* background-color: purple; */

  justify-content: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: red; */
  max-height: 200px;
`;

export const ImgBox = styled.div`
  position: relative;
  /* background-color: yellow; */
  width: 300px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s ease-in-out;
  border-radius: 5%;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 480px) {
    opacity: 1;
    background: transparent;

    &:hover {
      background-color: black;
    }
  }
`;

export const ImgTitle = styled.div`
  color: #1ab79c;
  font-weight: bold;
  font-size: 15.6px;
  @media screen and (max-width: 480px) {
    opacity: 0;
    &:hover {
      opacity: 0;
    }
  }
`;

export const Img = styled.div`
  img {
    width: 100%;
    border-radius: 5%;
    max-height: 300px;
  }
`;

export const ProjectsTitle = styled.div`
  font-weight: bolder;
  font-size: 35px;
  margin-bottom: 8px;
`;
export const ProjectsSubtitle = styled.div`
  color: #1ab79c;
  font-weight: bold;
  font-size: 15.6px;
  margin-bottom: 8px;
`;
export const ProjectsDesc = styled.div`
  font-weight: light;
  font-size: 13px;
  /* background-color: yellow; */
`;

export const ProjectsIcons = styled.div`
  margin-top: 20px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;

export const ProjectsLinks = styled.div`
  font-size: 13px;
  inline-size: 260px;
  overflow: hidden;
  color: #1ab79c;
  a {
    color: #1ab79c;
  }
`;
