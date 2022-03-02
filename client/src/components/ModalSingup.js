import React, { useState } from "react";
import logo from "../assets/er_logo.svg";
import styled from "styled-components";

export default function ModalSignup() {
  const Button = styled.button`
    color: white;
    font-weight: 700;
    font-size: 1em;
    margin: 1em;
    padding: 0.7em 3em;
    background-color: #697f6e;
    border: none;
    border-radius: 5em;
  `;

  const Logodiv = styled.div`
    /* margin-left: 50%; */
    margin: 0 30px 30px 30px;
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
  `;

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordRetype, setUserPasswordRetype] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const validHandler = () => {
    // 1. 이메일 중복 검사 -> 통과하지 못하면 '이미 가입된 회원입니다.'
    // 2. 이메일 유효성 검사 -> 통과하지 못하면 '적절하지 않은 이메일입니다.'
    // 3. 둘 다 통과할 경우 -> 다음으로 넘기기 (isValid true로)
    setIsValid(true);
  };
  const joinHandler = () => {
    // 회원가입 처리
  };
  const toFindModalHandler = () => {
    // 비밀번호 찾기 모달로 보내버리기
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <span className="modalClose">&times;</span>
        {isValid ? (
          <ModalCon className="modalContents">
            <Logodiv className="logo">
              <img alt="every routine logo" src={logo} />
            </Logodiv>
            <label for="email">이메일(아이디):</label>
            <StyledInput
              name="email"
              className="loginId"
              type="email"
              placeholder="email"
              // value={userEmail}
            />
            <label for="password">비밀번호:</label>
            <StyledInput
              name="password"
              className="loginPw"
              type="password"
              // value={userPassword}
            />
            <label for="passwordRetype">비밀번호 확인:</label>
            <StyledInput
              name="passwordRetype"
              className="loginPw"
              type="password"
              // value={userPasswordRetype}
            />
            <label for="nickname">닉네임:</label>
            <StyledInput
              name="nickname"
              className="userNickName"
              type="text"
              value={userNickName}
            />
            <div className="recaptchaHolder">reCaptCha</div>
            <Button className="loginBtn" onClick={joinHandler}>
              루틴 시작하기!
            </Button>
          </ModalCon>
        ) : (
          <ModalCon className="modalContents">
            <Logodiv className="logo">
              <img alt="every routine logo" src={logo} />
            </Logodiv>
            <label for="email">이메일(아이디):</label>
            <input
              name="email"
              className="loginId"
              type="email"
              placeholder="email"
              value={userEmail}
              onChange={emailChange}
            />
            <Button className="loginBtn" onClick={validHandler}>
              이메일로 가입하기
            </Button>
            <Hrstyle />
            <div className="socialBox">
              <div className="kakaoLogin">카카오 계정으로 가입하기</div>
              <div className="naverLogin">네이버 계정으로 가입하기</div>
              <div className="githubLogin">깃허브 계정으로 가입하기</div>
            </div>
            <Hrstyle />
            <div className="joinEnd">
              <div className="joinEndText" onClick={toFindModalHandler}>
                비밀번호를 잃어버리셨나요?
              </div>
            </div>
          </ModalCon>
        )}
      </div>
    </div>
  );
}
