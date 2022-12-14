import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import HamButton from "./HamButton";

const navitems = [
  {
    name: "Services",
    link: "#main"
  },
  {
    name: "Work",
    link: "#main"
  },
  {
    name: "About",
    link: "#main"
  },
  {
    name: "Partners",
    link: "#main"
  },
  {
    name: "Contact",
    link: "#main"
  }
];

const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  box-shadow: rgba(43, 83, 135, 0.08) 0px 3px 8px 0px;
  display: flex;
  align-items: center;
`;

const NavContent = styled.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBrand = styled.div`
  margin: 0 20px;
  width: 160px;
  color: ${props => props.theme.colors.primary};
`;
const NavBrandName = styled.h1`
  font-size: 36px;
`;

const slideIn = keyframes`
    from {
        right: -270px;
    }
    to {
        right: -20px;
    }
`;

const slideOut = keyframes`
    from {
        right: -20px;
    }
    to {
        right: -270px;
    }
`;

const NavList = styled.ul`
  display: flex;
  margin: 0 20px;

  position: fixed;
  top: 0;
  right: -300px;
  height: 100vh;
  width: 250px;
  overflow: hidden;
  animation: ${props =>
      props.display === "default"
        ? null
        : props.display === "opened"
        ? slideIn
        : slideOut}
    0.3s forwards;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 65px;
  background-color: white;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 10px;
`;

const NavLink = styled.a`
  display: block;
  font-size: 18px;
  font-weight: 600;
  padding: 6px 12px;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  border-radius: 1px;
  font-size: 20px;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavBar = () => {
  const [navstate, setNavstate] = useState("default");

  const handleNavstate = () => {
    if (navstate === "default") {
      setNavstate("opened");
    } else if (navstate === "opened") {
      setNavstate("closed");
    } else {
      setNavstate("opened");
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <NavBrand>
          <NavBrandName>Brand</NavBrandName>
        </NavBrand>
        <HamButton navstate={navstate} handleNavstate={handleNavstate} />
        <NavList display={navstate}>
          {navitems.map(item => (
            <NavItem key={item.name}>
              <NavLink href={item.link}>{item.name}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavContainer>
  );
};

export default NavBar;
