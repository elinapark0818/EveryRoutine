import React, { useState } from "react";
import styled from "styled-components";

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

const ModalCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #697f6e;
`;
const RoutineUl = styled.ul`
  margin-left: 10%;
`;
const RoutineLi = styled.li`
  position: relative;
  height: 40px;
  line-height: 40px;
  text-align: left;
`;

const ModButton = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.5em;
  border: none;
  border-radius: 1em;
  background-color: ${(props) => (props.isEditMode ? "green" : "#ffc300")};
`;

const DelButton = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.5em;
  background-color: #ff1818;
  border: none;
  border-radius: 1em;
`;

const AddButton = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.5em;
  background-color: #697f6e;
  border: none;
  border-radius: 1em;
`;

const ButtonCon = styled.div`
  position: absolute;
  right: 15px;
  top: 0;
`;

export default function ModalUserRoutine({
  closeUserRoutineModal,
  routineItems,
  editRoutineItems,
}) {
  const [newRoutineItem, setNewRoutineItem] = useState("");

  const routineAddButtonHandler = () => {
    if (newRoutineItem === "") {
    } else {
      editRoutineItems(newRoutineItem);
    }
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <span className="modalClose">&times;</span>
        <ModalCon className="modalContents">
          <RoutineUl>
            {routineItems.map((el, idx) => (
              <RoutineList key={idx} el={el.content} idx={idx} />
            ))}

            <RoutineLi>
              <input
                type="text"
                value={newRoutineItem}
                onChange={(e) => setNewRoutineItem(e.target.value)}
              />
              <ButtonCon>
                <AddButton onClick={() => routineAddButtonHandler()}>
                  추가
                </AddButton>
              </ButtonCon>
            </RoutineLi>
          </RoutineUl>
          <Button
            className="loginBtn"
            onClick={() => {
              closeUserRoutineModal();
            }}
          >
            수정 완료
          </Button>
        </ModalCon>
      </div>
    </div>
  );
}

function RoutineList({ el }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [singleRoutine, setSingleRoutine] = useState(el);
  return (
    <RoutineLi>
      {isEditMode ? (
        <input
          value={singleRoutine}
          onChange={(e) => setSingleRoutine(e.target.value)}
        ></input>
      ) : (
        <span>{singleRoutine}</span>
      )}

      <ButtonCon>
        <ModButton
          isEditMode={isEditMode}
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? "완료" : "수정"}
        </ModButton>
        <DelButton>삭제</DelButton>
      </ButtonCon>
    </RoutineLi>
  );
}
