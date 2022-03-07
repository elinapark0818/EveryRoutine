import React from "react";
import LogoImg from "../assets/yof.jpg";
import styled from "styled-components";

const UserDeleteContainer = styled.div`
  border: 5px solid black;
  min-width: 580px;
  width: 100%;
  height: 80vh;
  margin-top: -140px;
  margin-left: 200px;
  background-color: cornsilk;
  display: flex;
  flex-direction: column;
`;

const UserDeleteInfo = styled.div`
  margin-left: 50px;
`;
function UserDelete({ settingLogout }) {
  const testClick = () => {
    settingLogout();
  };
  return (
    <UserDeleteContainer>
      <h1 style={{ marginTop: "0.5em", marginLeft: "0.5em" }}>회원 탈퇴</h1>
      <p style={{ marginLeft: "1em", marginBottom: "5em" }}>
        회원탈퇴를 위한 페이지입니다.
      </p>
      <button onClick={() => testClick()}>클릭해보세요</button>
      <UserDeleteInfo
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={LogoImg}
          alt="logo"
          style={{ width: "100px", height: "100px" }}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10em",
            marginTop: "-6em",
          }}
        >
          <h3>이메일</h3>
          <p>elinapark0818@gmail.com</p>
          <h3>닉네임</h3>
          <p>오늘저녁은 샤브샤브</p>
        </div>
      </UserDeleteInfo>

      <div style={{ margin: "2em 20em" }}>
        <button
          style={{
            backgroundColor: "salmon",
            width: "100px",
            height: "30px",
            border: "none",
            color: "white",
            fontSize: "1em",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          회원탈퇴
        </button>
      </div>
    </UserDeleteContainer>
  );
}

export default UserDelete;
