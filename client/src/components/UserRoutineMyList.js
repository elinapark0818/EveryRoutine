import React, { useState } from "react";
import styled from "styled-components";
import DateSlider from "./DateSlider";

import Modal from "react-modal";
import ModalUserRoutine from "../components/ModalUserRoutine";

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

export default function UserRoutineMyList() {
  const [userRoutineIsOpen, setUserRoutineIsOpen] = useState(false);

  const closeUserRoutineModal = () => {
    setUserRoutineIsOpen(false);
  };

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
      <Button
        onClick={() => {
          setUserRoutineIsOpen(true);
        }}
      >
        +
      </Button>

      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={userRoutineIsOpen}
        onRequestClose={() => setUserRoutineIsOpen(false)}
      >
        <ModalUserRoutine closeUserRoutineModal={closeUserRoutineModal} />
      </Modal>
    </div>
  );
}
