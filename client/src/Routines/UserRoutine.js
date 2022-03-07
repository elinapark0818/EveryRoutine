import React from "react";
import UserRoutineMyList from "../components/UserRoutineMyList";
import styled from "styled-components";

function UserRoutine({ settingLogin }) {
  const Container = styled.div`
    display: block;
    border: 3px solid black;
    margin-left: 20%;
    width: 60%;
    padding: 30px;
  `;

  return (
    <Container>
      <UserRoutineMyList settingLogin={settingLogin} />
    </Container>
  );
}

export default UserRoutine;
