import React, { useState } from "react";
import LogoImg from "../assets/yof.jpg";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDeleteContainer = styled.div`
  border: 5px solid #f3f8f2;
  min-width: 580px;
  width: 100%;
  height: 80vh;
  margin-top: -140px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
`;

const UserDeleteInfo = styled.div`
  margin-left: 50px;
`;


const Button = styled.button`
  background-color: #697f6e;
  margin-left: 1em;
  width: 70px;
  height: 30px;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
const serverURL = "http://localhost:4000/users";

function UserDelete({ settingLogout }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  //  이메일과 비밀번호 받아서 삭제요청 보내기
  const handleDelete = async (e) => {
    console.log("찍히나?!");
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .get(serverURL + "/resign", { email: email }, cookieOption)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("회원탈퇴완료. 잘가~", res.data.data);
          // 로그아웃 시키기
          settingLogout();
          // 홈화면으로 이동하기
          navigate("/");
        }
      });
  };

  const handleChange = (e) => {
    setEmail(e);
  };

  return (
    <UserDeleteContainer>
      <h1 style={{color:"#697f6e", marginTop: "0.5em", marginLeft: "0.5em" }}>회원 탈퇴</h1>
      <p style={{ color:"#697f6e", marginLeft: "1em", marginBottom: "5em" }}>
        회원탈퇴를 위한 페이지입니다.
      </p>
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
          <h3 style={{color:"#697f6e"}}>이메일 <input placeholder="이메일을 입력하세요." style={{width:"20em"}} value={email} onChange={(e) => handleChange(e.target.value)} /></h3>

          
        </div>
      </UserDeleteInfo>

      <div style={{ margin: "2em 20em" }}>
        <Button onClick={(e) => handleDelete(e)} >
          회원탈퇴
        </Button>
      </div>
    </UserDeleteContainer>
  );
}

export default UserDelete;
