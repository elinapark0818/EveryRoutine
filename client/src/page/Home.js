import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../assets/big_logo.png";
import { Link, Outlet } from "react-router-dom";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
  margin: 0 5em;

  & h1 {
    font-size: 90px;
    font-weight: 50;
    color: mediumseagreen;
  }

  & p {
    padding: 0;
    font-size: 40px;
    font-weight: 50;
    color: black;
    margin-left: 6em;
  }
`;

const HomeButton = styled.button`
  color: mediumseagreen;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  background-color: #121619;
  height: 50px;
  width: 180px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 10px 10px;

  &:hover {
    background-color: mediumseagreen;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyRoutineContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MyRoutineLinkWrap = styled.div`
  width: 60%;
  /* margin-left: 20%; */
  margin: 10px 20%;
`;

const MyRoutineLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  /* border-radius: 0 20% 0 0; */
  outline: none;
  background-color: #697f6e;
  cursor: pointer;
  margin-right: 5px;
`;

const RoutineEditWrap = styled.div`
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home({ settingModalIsOpen }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>로그인 성공</button>
      <button onClick={() => setIsLogin(false)}>로그인 실패</button>

      <Container>
        <MyRoutineContainer>
          <MyRoutineLinkWrap>
            <MyRoutineLink to="">내 루틴</MyRoutineLink>
            <MyRoutineLink to="groupRoutines">그룹 루틴</MyRoutineLink>
          </MyRoutineLinkWrap>

          <RoutineEditWrap>
            <Outlet />
          </RoutineEditWrap>
        </MyRoutineContainer>
      </Container>

      {/* {isLogin ? (
        <Container>
          <MyRoutineContainer>
            <MyRoutineLink to="">내 루틴</MyRoutineLink>
            <MyRoutineLink to="groupRoutines">그룹 루틴</MyRoutineLink>

            <RoutineEditWrap>
              <Outlet />
            </RoutineEditWrap>
          </MyRoutineContainer>
        </Container>
      ) : (
        <HomeBody>
          <HomeContainer>
            <h1>
              Every Routine <br />
              <p>Make a Smart life</p>
            </h1>
            <img
              style={{ width: 500 }}
              src={LogoImg}
              alt="About_logo_image"
            ></img>

            <HomeButton onClick={() => settingModalIsOpen()}>
              시작하기
            </HomeButton>
          </HomeContainer>
        </HomeBody>
      )} */}
    </div>
  );
}

export default Home;
