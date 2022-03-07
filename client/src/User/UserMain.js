import React, { useCallback, useState } from "react";
import styled from "styled-components";
import LogoImg from "../assets/yof.jpg";
import axios from "axios";

// axios.defaults.withCredentials = true;

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

const Button = styled.button`
  background-color: salmon;
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

const serverURL = "http://localhost:4000";




function UserMain() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // 로그인된 데이터를 불러와서 초기값으로 설정으로 해줘야 할 거 같은데..
  // 닉네임, 비밀번호 [수정] -> 유효성 검사
  // [수정완료] -> 알럿으로 "{닉네임 | 비밀번호} 수정이 완료되었습니다."


  // function getCookie(name) {
  //   let matches = document.cookie.match(
  //     new RegExp(
  //       "(?:^|; )" +
  //         name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
  //         "=([^;]*)"
  //     )
  //   );
  //   return matches ? decodeURIComponent(matches[1]) : undefined;
  // }
  // * "accessToken" 으로 불러와야한다
  // const accessToken = getCookie("accessToken");

  // console.log("나와라 예쁜 토큰----", accessToken);

  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': accessToken,
  //   'Accept': 'application/json'
  // };

  const SendNameData = async () => {
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
    .post(
      serverURL + "/user-edit",
      { nickname: name },
      cookieOption
    ).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setName(name)
        console.log(res.data);
        alert("닉네임이 변경되었습니다.", res.data.data.nickname)
      }
    })
    .catch((err) => console.log(err))
  };


  const SendPwdData = async () => {
    console.log("찍혔음!");
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
    .post(
      serverURL + "/user-edit",
      { password: password,
        newPassword: passwordConfirm },
      cookieOption
    ).then((res) => {
      console.log("비밀번호 응답res", res);
      if (res.status === 200) {
        setPassword(password)
        setPasswordConfirm(passwordConfirm)
        console.log(res.data);
        alert("비밀번호가 변경되었습니다.", res.data.data.password)
      }
    })
    .catch((err) => console.log(err))
  };


  const SendImgData = async () => {
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
    .post(
      serverURL + "/user-edit",
      { profile: image },
      cookieOption
    ).then((res) => {
      if (res.status === 200) {
        setImage(image)
        console.log(res.data);
        alert("프로필 이미지가 변경되었습니다.", res.data.data.profile)
      }
    })
    .catch((err) => console.log(err))
  };

  // const onChange = (e) => {
  //   setName(e)
  //   setPassword(e)
  //   setImage(e)
  // };

  // * onChange
  const handleChangeName = (item) => {
    setName(item)
    console.log(name);
  }

  const handleChangePwd = (item) => {
    setPassword(item)
    console.log(password);
  }

  const handleChangePwdConfirm = (item) => {
    setPasswordConfirm(item)
    console.log(passwordConfirm);
  }

  const handleChangeImg = (item) => {
    setImage(item)
    console.log(image);
  }

  // const samePassword = (password, confirmPassword) => {
  //   return password === confirmPassword
  // }

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


          <label
            for="file"
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              color: "white",
              marginLeft: "-2em",
            }}
          >
            이미지 업로드
          </label>
          <input
            name="file"
            id="file"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handleChangeImg(e.target.value)}
          />
          <Button onClick={()=>SendImgData()}>수정</Button>


          <UserMainInfoWrap>
            <h3>이메일 : </h3>
            <p style={{ marginLeft: "0.5em" }}>elina@yof.com</p>
          </UserMainInfoWrap>



          <UserMainInfoWrap>
            <h3>닉네임 : </h3>
            <input 
              type="text" 
              value={name}
              style={{ marginLeft: "0.5em" }} 
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <Button onClick={(e)=>SendNameData(e)}>수정</Button>
          </UserMainInfoWrap>



        </div>
      </UserInfo>

      <hr></hr>

      <UserInfo style={{ margin: "1em" }}>
        <h1>비밀번호 변경</h1>
        <div style={{ margin: "1em" }}>
          <h3>
            기존 비밀번호 : 
              <input 
                type="password"
                value={password}
                onChange={(e)=>handleChangePwd(e.target.value)}
              />
          </h3>

          <h3>
            새로운 비밀번호 : 
            <input 
              type="password"
              value={passwordConfirm}
              onChange={(e)=>handleChangePwdConfirm(e.target.value)}
            />
            <Button onClick={()=>SendPwdData()}>수정</Button>
          </h3>
        </div>
      </UserInfo>
    </UserMainComponent>
  );
}

export default UserMain;
