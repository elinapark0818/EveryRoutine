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

const StyledInput = styled.input`
  margin-bottom: 20px;
`;

export default function ModalGroupRoutine({ closeGroupRoutineModal }) {
  const [groupRoutineTitle, setgroupRoutineTitle] = useState("");

  const titleChange = (e) => {
    setgroupRoutineTitle(e.target.value);
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <span className="modalClose">&times;</span>
        <ModalCon className="modalContents">
          <label for="groupTitle">루틴 그룹명:</label>
          <StyledInput
            id="groupTitle"
            className="groupTitle"
            type="text"
            placeholder="그룹의 이름을 입력해주세요."
            value={groupRoutineTitle}
            onChange={titleChange}
          />
          <label for="groupEx">루틴 그룹 소개:</label>
          <textarea name="groupEx" className="groupEx" value="" />
          <label for="groupTagSet">그룹 태그</label>
          <formset name="groupTagSet">
            <input id="health" type="checkbox" />
            <label for="health">건강</label>
            <input id="life" type="checkbox" />
            <label for="life">생활</label>
            <input id="workout" type="checkbox" />
            <label for="workout">운동</label>
            <input id="mission" type="checkbox" />
            <label for="mission">미션</label>
          </formset>
          <label for="groupImg">그룹 대표 이미지:</label>
          <StyledInput
            id="groupImg"
            className="groupImg"
            type="file"
            value=""
          />
          <Button
            className="loginBtn"
            onClick={() => {
              closeGroupRoutineModal();
            }}
          >
            루틴 시작하기!
          </Button>
        </ModalCon>
      </div>
    </div>
  );
}
