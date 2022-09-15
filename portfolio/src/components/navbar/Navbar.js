import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to='/'>TR</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>ABOUT</NavLink>
          <NavLink to='/projects'>PROJECTS</NavLink>
          <NavLink>CONTACT</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Navbar;

export const Nav = styled.nav`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-style: solid;
  border-width: 5px;
  border-color: #1ab79c;
  font-family: 'Anton', sans-serif;
`;

export const NavItem = styled.div`
  display: flex;
  margin: 40px;

  @media screen and (max-width: 440px) {
    margin: 5px;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 20px;
  color: #1ab79c;
  @media screen and (max-width: 440px) {
    margin: 5px;
  }
`;
