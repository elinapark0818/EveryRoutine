import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LogoImg from "../assets/yof.jpg";
import axios from "axios";

// axios.defaults.withCredentials = true;

const UserMainComponent = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid #f3f8f2;
  margin-top: -140px;
  margin-left: 200px;
  width: 100%;
  height: 80vh;
`;

const UserMainInfoWrap = styled.div`
  display: flex;
  margin: 1em;
  /* flex-direction: column; */
  /* margin-top: -4em;
  margin-left: 20em; */
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  /* justify-content: center; */
  /* align-items: center; */
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

const Label = styled.label`
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
  `


const serverURL = "http://localhost:4000/users";

function UserMain() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // const [showEmail, setShowEmail] = useState(false)
  // const [showImg, setShowImg] = useState(false)
  // const [showName, setShowName] = useState(false)
  // 로그인된 데이터를 불러와서 초기값으로 설정으로 해줘야 할 거 같은데..
  // 닉네임, 비밀번호 [수정] -> 유효성 검사
  // [수정완료] -> 알럿으로 "{닉네임 | 비밀번호} 수정이 완료되었습니다."


  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get(serverURL + "/user-info",);
        console.log(res.data);
         // 데이터는 response.data 안에 들어있습니다.
        setName(res.data.data.nickname)
        setEmail(res.data.data.email)
        setImage(res.data.data.profile)
      } catch (e) {
        console.log(e)
      }
    };

    getUserInfo();
  }, []);

  // * 이미지 저장
  const saveImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  // * 이미지 삭제
  const deleteImage = (e) => {
    URL.revokeObjectURL(image)
    setImage("")
  }

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
      .post(serverURL + "/user-edit", { nickname: name }, cookieOption)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setName(name);
          console.log(res.data);
          alert("닉네임이 변경되었습니다.", res.data.data.nickname);
        }
      })
      .catch((err) => console.log(err));
  };

  const SendPwdData = async () => {
    // console.log("찍혔음!");
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
        { password: password, newPassword: newPassword },
        cookieOption
      )
      .then((res) => {
        console.log("비밀번호 응답res", res);
        if (res.status === 200) {
          setPassword(password);
          setNewPassword(newPassword);
          console.log(res.data);
          alert("비밀번호가 변경되었습니다.", res.data.password);
        }
      })
      .catch((err) => console.log(err));
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
      .post(serverURL + "/user-edit", { profile: image }, cookieOption)
      .then((res) => {
        if (res.status === 200) {
          setImage(image);
          console.log(res.data);
          alert("프로필 이미지가 변경되었습니다.", res.data.profile);
        }
      })
      .catch((err) => console.log(err));
  };


  // *same password

  const SamePassword = async () => {
    // console.log("찍혔음!");
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .get(
        serverURL + "/user-info",
        // { password: password },
        cookieOption
      )
      .then((res) => {
        // console.log("비밀번호 응답res", res);
        if (password) {
          // console.log("입력 비밀번호???", password);
          // console.log("비밀번호 조회는 잘 되었나????===", res.data.data.password);
          if (password !== res.data.data.password) {
            alert("비밀번호가 일치하지 않습니다.", res.data.password);
          } else if (password === res.data.data.password) {
            alert("새로운 비밀번호를 입력해주세요.", res.data.password);
          }
        }
      })
      .catch((err) => console.log(err));
  };


  // *


  // * onChange
  const handleChangeName = (item) => {
    setName(item);
    console.log(name);
  };

  const handleChangePwd = (item) => {
    setPassword(item);
    console.log(password);
  };

  const handleChangePwdConfirm = (item) => {
    setNewPassword(item);
    console.log(newPassword);
  };

  const handleChangeImg = (item) => {
    setImage(item);
    console.log(image);
  };

  
  return (
    <UserMainComponent>
      <UserInfo style={{ margin: "1em", marginBottom: "5em", height: "17em" }}>
        <h1 style={{color:"#697f6e"}}>회원 정보 관리</h1>
        <p style={{color:"#697f6e"}}>여러분을 개성 있게 소개해보세요.</p>


        <div style={{ margin: "1em" }}>

          <h2 style={{color:"#697f6e"}}>이메일 : {email}</h2>
          <p style={{color:"green"}}>이메일은 변경할 수 없습니다.</p>

        <UserMainInfoWrap>
      
          {image && (
            <img 
              alt="profile_img" 
              src={image} 
              style={{width:"200px", height:"200px",  borderRadius:"50%"}}
              onChange={(e) => handleChangeImg(e.target.value)}
              />)
            }

          <Label
            for="file"
            style={{
              cursor: "pointer",
            }}
          >
            업로드
          </Label> 
            <input 
              id="file"
              name="file"
              type="file" 
              accept="image/*" 
              onChange={saveImage}
              style={{display:"none"}}
              />
            <Button onClick={() => deleteImage()} >삭제</Button>
            <Button onClick={(e) => SendImgData(e)}>수정</Button>
          
          </UserMainInfoWrap>

          
          <h3 style={{color:"#697f6e"}}>닉네임 변경</h3>
            {/* <p style={{color:"#697f6e"}}>닉네임 : {name}</p> */}
          <UserMainInfoWrap>
            
            <input
              type="text"
              value={name}
              style={{ marginLeft: "0.5em" }}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <Button onClick={(e) => SendNameData(e)}>수정</Button>
            
          </UserMainInfoWrap>
        </div>

        <h3 style={{color:"#697f6e"}}>비밀번호 변경</h3>
        <div style={{ margin: "1em", marginBottom: "2em" }}>
          <h3 style={{color:"#697f6e"}}>
            기존 비밀번호 :
            <input
              type="password"
              value={password}
              onChange={(e) => handleChangePwd(e.target.value)}
            />
          <Button onClick={() => SamePassword()}>확인</Button>
          </h3>

          <h3 style={{color:"#697f6e"}}>
            새로운 비밀번호 :
            <input
              type="password"
              value={newPassword}
              onChange={(e) => handleChangePwdConfirm(e.target.value)}
            />
            <Button onClick={(e) => SendPwdData(e)}>수정</Button>
          </h3>
        </div>
      </UserInfo>
    </UserMainComponent>
  );
}

export default UserMain;
