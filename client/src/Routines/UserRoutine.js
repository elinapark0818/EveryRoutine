import React from "react";
import UserRoutineMyList from "../components/UserRoutineMyList";
import styled from "styled-components";

function UserRoutine() {
  const Container = styled.div`
    display: block;
    border: 3px solid black;
    width: 60%;
    padding: 30px;
  `;

  return (
    <Container>
      <UserRoutineMyList />
    </Container>
  );
}

export default UserRoutine;
