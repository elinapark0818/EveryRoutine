import React from "react";
import { HomeBody, HomeContainer, HomeButton } from "../styles/Home.style";
import LogoImg from "../assets/big_logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeBody>
      <HomeContainer>
        <h1>
          Every Routine <br />
          <p>Make a Smart life</p>
        </h1>
        <img style={{ width: 500 }} src={LogoImg} alt="About_logo_image"></img>

        <Link to="/ModalLogin">
          <HomeButton>시작하기</HomeButton>
        </Link>
      </HomeContainer>
    </HomeBody>
  );
}

export default Home;
