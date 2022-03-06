import React, { useState } from "react";
import logo from "../assets/er_logo.svg";
import styled from "styled-components";
import axios from "axios";

axios.defaults.withCredentials = true;

const Button = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.7em 3em;
  background-color: #697f6e;
  border: none;
  border-radius: 5em;
  cursor: pointer;
`;

const Logodiv = styled.div`
  /* margin-left: 50%; */
  margin: 0 60px 20px 60px;
`;

const Hrstyle = styled.hr`
  border-top: 1px dotted #697f6e;
  width: 100%;
  margin: 30px 0;
`;

const ModalCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #697f6e;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 80%;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
`;

const EmailCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isLoginEmailOk ? "none" : "block")};
`;

const EmailUserCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isRightUser ? "none" : "block")};
`;

const TextLink = styled.div`
  cursor: pointer;
  text-decoration: underline dotted;
`;

const regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const serverURL = "http://localhost:4000";
export default function ModalLogin({ settingModalIsClose }) {
  const [isLoginEmailOk, setIsLoginEmailOk] = useState(true);
  const [isRightUser, setIsRightUser] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const loginHandler = () => {
    if (!userEmail.match(regExp)) {
      setIsLoginEmailOk(false);
    } else {
      setIsLoginEmailOk(true);
      if (checkRightUserInDb(userEmail)) {
        // 아이디가 있으므로 비밀번호 입력 창을 띄우면 됩니다.
        console.log("비밀번호 입력창 필요");
      } else {
        setIsRightUser(false);
      }
    }
  };

  const checkRightUserInDb = (userEmail) => {
    axios
      .post(serverURL + "/signup-check", { email: userEmail })
      .then((result) => console.log(result.status));
    // userEmail을 db로 보낸 후, db에 있는 email인지 검증받습니다.
    // 검증결과는 위 loginHandler로 전달합니다.
  };

  const toJoinModalHandler = () => {
    // 로그인은 닫힙니다.
    // 조인은 열립니다.
    settingModalIsClose();
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <span className="modalClose">&times;</span>
        <ModalCon className="modalContents">
          <Logodiv className="logo">
            <img alt="every routine logo" src={logo} />
          </Logodiv>

          <StyledLabel htmlFor="email">이메일(아이디)</StyledLabel>
          <StyledInput
            name="email"
            className="loginId"
            type="email"
            placeholder="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <EmailCheck isLoginEmailOk={isLoginEmailOk}>
            ! 이메일 주소를 정확히 입력해주세요.
          </EmailCheck>
          <EmailUserCheck isRightUser={isRightUser}>
            ! 등록되지 않은 사용자 이메일입니다.
          </EmailUserCheck>

          <Button className="loginBtn" onClick={loginHandler}>
            이메일로 로그인하기
          </Button>
          <Hrstyle />
          <div className="socialBox">
            <div className="kakaoLogin">카카오 계정으로 로그인하기</div>
            <div className="naverLogin">네이버 계정으로 로그인하기</div>
            <div className="githubLogin">깃허브 계정으로 로그인하기</div>
          </div>
          <Hrstyle />
          <TextLink className="loginEnd">
            <div className="loginEndText" onClick={toJoinModalHandler}>
              아직 계정이 없으신가요?
            </div>
          </TextLink>
        </ModalCon>
      </div>
    </div>
  );
}
