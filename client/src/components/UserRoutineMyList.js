import React, { useState } from "react";
import styled from "styled-components";
import DateSlider from "./DateSlider";

export default function UserRoutineMyList() {
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
  const UserRotineList = styled.ul`
    margin: 0;
    list-style: none;
    float: left;
  `;
  const UserRoutine = styled.li``;

  return (
    <div>
      <DateSlider />
      <UserRotineList>
        <UserRoutine>
          <input type="checkbox" />
          아침 7시에 일어나기
        </UserRoutine>

        <UserRoutine>
          <input type="checkbox" />물 2L 마시기
        </UserRoutine>

        <UserRoutine>
          <input type="checkbox" />
          스트레칭 하기
        </UserRoutine>
      </UserRotineList>
      <Button>+</Button>
    </div>
  );
}
