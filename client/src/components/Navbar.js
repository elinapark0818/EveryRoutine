import { React, useState, useEffect } from "react";
import LogoImg from "../assets/er_logo.svg";
import styled from "styled-components";

import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "35vh" : "80px")};
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  padding-right: 15%;
`;

const RightContainer = styled.div`
  flex: 70%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: mediumseagreen;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  padding: 10px 10px;

  &:hover {
    background-color: mediumseagreen;
    color: #fff;
    transition: 0.5s ease-in;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(Link)`
  color: mediumseagreen;
  font-size: x-large;
  text-decoration: none;
  /* margin: 10px; */
  padding: 10px 10px;

  &:hover {
    background-color: mediumseagreen;
    color: #fff;
    transition: 0.5s ease-in;
  }
`;

const Logo = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto;
  display: block;
  width: 300px;
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: mediumseagreen;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

function Navbar({ settingModalIsOpen, isLogin, settingLogout }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [extendNavbar, setExtendNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollTop]);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollTop = winScroll / (scrollHeight - clientHeight);
    setScrollTop(scrollTop);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link to="/" exact>
            <Logo src={LogoImg}></Logo>
          </Link>
        </LeftContainer>

        <RightContainer>
          {isLogin ? (
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((cur) => !cur);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>

              {/* <NavbarLink to="/" exact>
                HOME
              </NavbarLink> */}
              <NavbarLink to="/about"> ABOUT</NavbarLink>
              <NavbarLink to="/myPage"> MY PAGE</NavbarLink>
              <button
                onClick={() => {
                  settingLogout();
                }}
              >
                {" "}
                SIGN OUT
              </button>
            </NavbarLinkContainer>
          ) : (
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((cur) => !cur);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>

              {/* <NavbarLink to="/" exact>
                HOME
              </NavbarLink> */}
              <NavbarLink to="/about"> ABOUT</NavbarLink>
              <button onClick={() => settingModalIsOpen()}> SIGN IN</button>
            </NavbarLinkContainer>
          )}
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> HOME</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> ABOUT</NavbarLinkExtended>
          <NavbarLinkExtended to="/myPage"> MY PAGE</NavbarLinkExtended>
          <button onClick={() => settingModalIsOpen()}> SIGN IN</button>
          <NavbarLink to="/routines">ROUTINES</NavbarLink>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
