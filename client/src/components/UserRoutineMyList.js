import React, { useState } from "react";
import styled from "styled-components";
import DateSlider from "./DateSlider";
import axios from "axios";

import Modal from "react-modal";
import ModalUserRoutine from "../components/ModalUserRoutine";

const Button = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  width: 50px;
  height: 50px;
  /* padding: 0.7em 1.5em; */
  background-color: #697f6e;
  border: none;
  border-radius: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;
const UserRoutineListCon = styled.div`
  min-height: 300px;
  position: relative;
`;

const UserRotineList = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding: 30px;
  background-color: #f3f8f2;
`;
const RoutineListItemLi = styled.li`
  padding: 5px 0;
  text-decoration: underline dotted;
`;

const RoutineCheck = styled.input`
  margin-right: 10px;
`;

const serverURL = "http://localhost:4000";

export default function UserRoutineMyList({ settingLogin }) {
  const [userRoutineIsOpen, setUserRoutineIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [routineItems, setRoutineItems] = useState([
    { id: "item_id_from_db", content: "아침 7시에 일어나기" },
    { id: "item_id_from_db", content: "물 2L 마시기" },
    { id: "item_id_from_db", content: "스트레칭 하기" },
  ]);

  async function getRoutine() {
    const response = await axios
      .post(serverURL + "/user-routine", {
        // 뭐 보내야하는지 아직 결정 안됨
      })
      .catch((err) => {
        // 통신 오류 시
      });
    if (response) {
      if (response.status === 200) {
        // 정보 받아오기
      } else {
        // 통신 오류 외의 다른 오류 있을 때
      }
    }
    return;
  }

  const editRoutineItems = (newRoutineItem) => {
    setRoutineItems([
      ...routineItems,
      { id: "new_item_id_from_db", content: newRoutineItem },
    ]);
  };

  const closeUserRoutineModal = () => {
    setUserRoutineIsOpen(false);
  };

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    console.log(checkedItems);
  };

  return (
    <div>
      <DateSlider />

      <UserRoutineListCon>
        <UserRotineList>
          <UserRoutine
            checkedItemHandler={checkedItemHandler}
            routineItems={routineItems}
          />
        </UserRotineList>

        <Button
          onClick={() => {
            setUserRoutineIsOpen(true);
          }}
        >
          +
        </Button>
      </UserRoutineListCon>

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
        <ModalUserRoutine
          closeUserRoutineModal={closeUserRoutineModal}
          routineItems={routineItems}
          editRoutineItems={editRoutineItems}
        />
      </Modal>
    </div>
  );
}

function UserRoutine({ checkedItemHandler, routineItems }) {
  return routineItems.map((el, idx) => (
    <RoutineListItem
      key={idx}
      checkedItemHandler={checkedItemHandler}
      el={el.content}
      id={el.id}
      idx={idx}
    />
  ));
}

function RoutineListItem({ checkedItemHandler, el, idx }) {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = (e) => {
    setChecked(!bChecked);
    checkedItemHandler(e.target.id, e.target.checked);
  };
  return (
    <RoutineListItemLi>
      <RoutineCheck
        type="checkbox"
        id={idx}
        checked={bChecked}
        onChange={(e) => checkHandler(e)}
      />
      <label htmlFor={idx}>{el}</label>
    </RoutineListItemLi>
  );
}
