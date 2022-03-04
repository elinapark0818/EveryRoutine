import React, { useState } from "react";
import styled from "styled-components";

export default function ModalUserRoutine({ closeUserRoutineModal }) {
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
    background-color: #ffc300;
    border: none;
    border-radius: 1em;
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

  return (
    <div className="modal">
      <div className="modalLogin">
        <span className="modalClose">&times;</span>
        <ModalCon className="modalContents">
          <ul>
            <RoutineLi>
              <span>7시 기상</span>
              <ButtonCon>
                <ModButton>수정</ModButton>
                <DelButton>삭제</DelButton>
              </ButtonCon>
            </RoutineLi>
            <RoutineLi>
              <span>물 2L 마시기</span>
              <ButtonCon>
                <ModButton>수정</ModButton>
                <DelButton>삭제</DelButton>
              </ButtonCon>
            </RoutineLi>
            <RoutineLi>
              <span>엄마에게 전화하기</span>
              <ButtonCon>
                <ModButton>수정</ModButton>
                <DelButton>삭제</DelButton>
              </ButtonCon>
            </RoutineLi>
            <RoutineLi>
              <span>고양이 화장실 청소</span>
              <ButtonCon>
                <ModButton>수정</ModButton>
                <DelButton>삭제</DelButton>
              </ButtonCon>
            </RoutineLi>
            <RoutineLi>
              <input type="text" />
              <ButtonCon>
                <AddButton>추가</AddButton>
              </ButtonCon>
            </RoutineLi>
          </ul>
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
