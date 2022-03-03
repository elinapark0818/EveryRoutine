import React from "react";
import { Link, Outlet } from "react-router-dom";

import styled from "styled-components";

const MyPageContainer = styled.div`
  display: flex;

  flex-direction: column;
`;

const UserEditWrap = styled.div`
  display: flex;
  flex: 70%;
  justify-content: center;
`;

const MyPageButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 30%;
`;

const MyPageLink = styled(Link)`
  color: mediumseagreen;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  padding: 10px 10px;
  border: none;
  outline: none;
  width: 10em;
  background-color: bisque;
`;

function MyPage() {
  return (
    <div>
      <MyPageContainer>
        <MyPageButtonWrap>
          <MyPageLink to="">회원정보 수정</MyPageLink>
        </MyPageButtonWrap>
        <MyPageButtonWrap>
          <MyPageLink to="userDelete">회원탈퇴</MyPageLink>
        </MyPageButtonWrap>
        <UserEditWrap>
          <Outlet />
        </UserEditWrap>
      </MyPageContainer>
    </div>
  );
}

export default MyPage;
