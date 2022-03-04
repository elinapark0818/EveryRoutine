import React, { useState } from "react";
import logo from "../assets/er_logo.svg";
import styled from "styled-components";

export default function ModalLogin({ settingModalIsClose }) {
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

  const [userEmail, setUserEmail] = useState("");

  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const loginHandler = () => {
    //로그인 기능 수행하기
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
          <input
            name="email"
            className="loginId"
            type="email"
            placeholder="email"
            value={userEmail}
            onChange={emailChange}
          />
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
          <div className="loginEnd">
            <div className="loginEndText" onClick={toJoinModalHandler}>
              아직 계정이 없으신가요?
            </div>
          </div>
        </ModalCon>
      </div>
    </div>
  );
}
