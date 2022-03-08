import React, { useState, useEffect } from "react";
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

const serverURL = "http://localhost:4000/users";


const dummyData = {
  checked: [0, 1, 1],
  contents: ["물 2L 마시기", "스트레칭 하기", "아침 7시에 일어나기"],
};

export default function UserRoutineMyList({ settingLogin }) {
  const [userRoutineIsOpen, setUserRoutineIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(dummyData.checked);
  const [routineItems, setRoutineItems] = useState(dummyData.contents);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchRoutineItems = async () => {
  //     try {
  //       // 요청이 시작 할 때에는 error 와 routineItems 를 초기화하고
  //       setError(null);

  //       // setRoutineItems(dummyData.contents);
  //       // setCheckedItems(dummyData.checked);
  //       // loading 상태를 true 로 바꿉니다.
  //       setLoading(true);
  //       const response = await axios.get(serverURL + "/user-info");
  //       console.log(response.data);
  //       // setRoutineItems(response.data); // 데이터는 response.data 안에 들어있습니다.

  //     } catch (e) {
  //       setError(e);
  //     }
  //     setLoading(false);
  //   };

  //   fetchRoutineItems();
  // }, []);

  const editRoutineItems = (newRoutineItem) => {
    setRoutineItems([
      ...routineItems,
      { id: "new_item_id_from_db", content: newRoutineItem },
    ]);
  };

  const closeUserRoutineModal = () => {
    setUserRoutineIsOpen(false);
  };

  const checkedItemHandler = (idx, checked) => {
    console.log("idx====>", idx);
    if (checked) {
      let newCheckSet = [
        ...checkedItems.slice(0, idx),
        0,
        ...checkedItems.slice(idx + 1),
      ];
      setCheckedItems(newCheckSet);
      // 클릭한 아이템이 원래 체크상태 였다면 (언체크 후 array 0으로 바꿔줌)
    } else {
      let newCheckSet = [
        ...checkedItems.slice(0, idx),
        1,
        ...checkedItems.slice(idx + 1),
      ];
      setCheckedItems(newCheckSet);
    }
    // 아이템 하나가 체크될 때마다 axios patch 날려준 후 응답을 리스트에 업데이트 함
  };

  return (
    <div>
      <DateSlider />

      <UserRoutineListCon>
        <UserRotineList>
          <UserRoutine
            checkedItemHandler={checkedItemHandler}
            routineItems={routineItems}
            checkedItems={checkedItems}
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

function UserRoutine({ checkedItemHandler, checkedItems, routineItems }) {
  return routineItems.map((el, idx) => (
    <RoutineListItem
      key={idx}
      checkedItemHandler={checkedItemHandler}
      el={el}
      // id={el.id}
      idx={idx}
      checked={checkedItems[idx]}
    />
  ));
}

function RoutineListItem({ checkedItemHandler, idx, el, checked }) {
  // const [bChecked, setChecked] = useState(false);

  // const checkHandler = (e) => {
  //   setChecked(!bChecked);
  //   checkedItemHandler(e.target.id, e.target.checked);
  // };
  return (
    <RoutineListItemLi>
      <RoutineCheck
        type="checkbox"
        id={idx}
        checked={checked ? true : false}
        onChange={() => checkedItemHandler(idx, checked)}
      />
      <label htmlFor={idx}>{el}</label>
    </RoutineListItemLi>
  );
}
