import { React, useState, useEffect } from "react";
import LogoImg from "../assets/er_logo.svg";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarExtendedContainer,
} from "../styles/Navbar.style";

function Navbar() {
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

  const isLogin = false;

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
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

              <NavbarLink to="/" exact>
                HOME
              </NavbarLink>
              <NavbarLink to="/about"> ABOUT</NavbarLink>
              <NavbarLink to="/myPage"> MY PAGE</NavbarLink>
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

              <NavbarLink to="/" exact>
                HOME
              </NavbarLink>
              <NavbarLink to="/about"> ABOUT</NavbarLink>
              <NavbarLink to="/myPage"> MY PAGE</NavbarLink>
              <NavbarLink to="/signUp"> SIGN IN</NavbarLink>
            </NavbarLinkContainer>
          )}
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> HOME</NavbarLinkExtended>
          <NavbarLinkExtended to="/"> ABOUT</NavbarLinkExtended>
          <NavbarLinkExtended to="/"> MY PAGE</NavbarLinkExtended>
          <NavbarLinkExtended to="/"> SIGN IN</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
