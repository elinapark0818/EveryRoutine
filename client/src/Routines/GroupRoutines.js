import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import GroupRoutineMyList from "../components/GroupRoutineMyList";
import GroupRoutineNewList from "../components/GroupRoutineNewList";

import Modal from "react-modal";
import ModalGroupRoutine from "../components/ModalGroupRoutine";

const Container = styled.div`
  border: 3px solid #697f6e;
  width: 800px;
  margin-left: calc((100% - 800px) / 2);
  padding: 30px;
  margin-bottom: 50px;
`;

const Con = styled.div`
  padding: 20px;
`;

const Hrstyle = styled.hr`
  border-top: 1px dotted #697f6e;
  width: 100%;
  margin: 30px 0;
`;

const serverURL = "http://localhost:4000/user-routine";

const date = new Date();
const today = date.getDate();
const todayMonth = date.getMonth() + 1;

function GroupRoutines({ settingDetailMode, sendGroupId }) {
  const [groupRoutineIsOpen, setGroupRoutineIsOpen] = useState(false);
  const [selectDate, setSelectDate] = useState({
    date: today,
    month: todayMonth,
  });

  const changeSelectDate = (selected) => {
    setSelectDate(selected);
  };

  const closeGroupRoutineModal = () => {
    setGroupRoutineIsOpen(false);
  };

  const openGropRoutineModal = () => {
    setGroupRoutineIsOpen(true);
  };

  return (
    <div>
      <Container>
        <Con>
          <GroupRoutineMyList
            openGropRoutineModal={openGropRoutineModal}
            selectDate={selectDate}
            changeSelectDate={changeSelectDate}
            settingDetailMode={settingDetailMode}
            sendGroupId={sendGroupId}
          />
        </Con>
        <Hrstyle />
        <Con>
          <GroupRoutineNewList
            settingDetailMode={settingDetailMode}
            sendGroupId={sendGroupId}
          />
        </Con>
      </Container>

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
        isOpen={groupRoutineIsOpen}
        onRequestClose={() => setGroupRoutineIsOpen(false)}
      >
        <ModalGroupRoutine closeGroupRoutineModal={closeGroupRoutineModal} />
      </Modal>
    </div>
  );
}

export default GroupRoutines;
