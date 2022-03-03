import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/yof.jpg";

const UserMainComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: cornsilk;
  border: 5px solid black;
  margin-top: -140px;
  margin-left: 200px;
  width: 100%;
  height: 80vh;
`;

const UserMainInfoWrap = styled.div`
  display: flex;
  margin-top: -4em;
  margin-left: 20em;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

function UserMain() {
  return (
    <UserMainComponent>
      <UserInfo style={{ margin: "1em", marginBottom: "5em", height: "17em" }}>
        <h1>회원 정보 관리</h1>
        <p>여러분을 개성 있게 소개해보세요.</p>

        <div style={{ margin: "1em" }}>
          <img
            src={LogoImg}
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          ></img>
          <input type="file" />
          <UserMainInfoWrap>
            <h3>이메일 : </h3>
            <p style={{ marginLeft: "0.5em" }}>elinapark0818@gmail.com</p>
          </UserMainInfoWrap>

          <UserMainInfoWrap>
            <h3>닉네임 : </h3>
            <input type="text" style={{ marginLeft: "0.5em" }} />

            <button
              style={{
                backgroundColor: "salmon",
                marginLeft: "1em",
                width: "70px",
                height: "30px",
                border: "none",
                color: "white",
                fontSize: "1em",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              수정
            </button>
          </UserMainInfoWrap>
        </div>
      </UserInfo>

      <hr></hr>

      <UserInfo style={{ margin: "1em" }}>
        <h1>비밀번호 변경</h1>
        <div style={{ margin: "1em" }}>
          <h3>현재 비밀번호 : </h3>
          <input type="text" />
          <button
            style={{
              backgroundColor: "salmon",
              marginLeft: "1em",
              width: "70px",
              height: "30px",
              border: "none",
              color: "white",
              fontSize: "1em",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            확인
          </button>

          <h3>새로운 비밀번호 : </h3>
          <input type="text" />
          <h3>비밀번호 확인 : </h3>
          <input type="text" />
          <button
            style={{
              backgroundColor: "salmon",
              marginLeft: "1em",
              width: "70px",
              height: "30px",
              border: "none",
              color: "white",
              fontSize: "1em",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            수정
          </button>
        </div>
      </UserInfo>
    </UserMainComponent>
  );
}

export default UserMain;
