import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import GroupRoutineMyList from "./GroupRoutineMyList";
import GroupRoutineNewList from "./GroupRoutineNewList";
import GroupRoutineSearch from "./GroupRoutineSearch";

import Modal from "react-modal";
import ModalGroupRoutine from "../components/ModalGroupRoutine";

const Container = styled.div`
  border: 3px solid #697f6e;
  width: 800px;
  margin-left: calc((100% - 800px) / 2);
  padding: 30px;
`;

const Con = styled.div`
  padding: 20px;
`;
function GroupRoutineMain() {
  const [groupRoutineIsOpen, setGroupRoutineIsOpen] = useState(false);

  const closeGroupRoutineModal = () => {
    setGroupRoutineIsOpen(false);
  };

  const openGropRoutineModal = () => {
    setGroupRoutineIsOpen(true);
  };

  return (
    <div>
      <Outlet />
      <Container>
        <Con>
          <GroupRoutineMyList
            openGropRoutineModal={openGropRoutineModal}
            Link={Link}
          />
        </Con>
        <hr />
        <Con>
          <GroupRoutineSearch />
        </Con>
        <Con>
          <GroupRoutineNewList Link={Link} />
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
export default GroupRoutineMain;
