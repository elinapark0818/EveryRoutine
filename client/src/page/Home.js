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
  width: 800px;
  margin-left: calc((100% - 800px) / 2 + 10px);
  margin-top: 50px;
  margin-bottom: 9px;
`;

const MyRoutineLinkUser = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  /* border-radius: 0 20% 0 0; */
  outline: none;
  background-color: ${(props) => (props.userMode ? "#697f6e" : "gray")};
  cursor: pointer;
  margin-right: 5px;
`;

const MyRoutineLinkGroup = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  /* border-radius: 0 20% 0 0; */
  outline: none;
  background-color: ${(props) => (props.userMode ? "gray" : "#697f6e")};
  cursor: pointer;
  margin-right: 5px;
`;

const RoutineEditWrap = styled.div`
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home({ settingModalIsOpen, isLogin }) {
  const [userMode, setUserMode] = useState(true);
  const changeModeToUser = () => {
    setUserMode(true);
  };
  const changeModeToGroup = () => {
    setUserMode(false);
  };
  return (
    <div>
      {isLogin ? (
        <Container>
          <MyRoutineContainer>
            <MyRoutineLinkWrap>
              <MyRoutineLinkUser
                onClick={() => changeModeToUser()}
                userMode={userMode}
                to=""
              >
                내 루틴
              </MyRoutineLinkUser>
              <MyRoutineLinkGroup
                onClick={() => changeModeToGroup()}
                userMode={userMode}
                to="groupRoutines"
              >
                그룹 루틴
              </MyRoutineLinkGroup>
            </MyRoutineLinkWrap>

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
      )}
    </div>
  );
}

export default Home;
