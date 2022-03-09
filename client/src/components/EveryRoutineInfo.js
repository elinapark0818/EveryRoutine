import React from "react";
import styled from "styled-components";
// import GroupRoutines from "../assets/GroupRoutines.png";
// import MyGroupRoutine from "../assets/MyGroupRoutine.png";
// import MyRoutine from "../assets/MyRoutine.png";

const Text = styled.h3`
  color: #697f6e;
  font-weight: bold;
  font-size: 30px;
`;

function EveryRoutineInfo() {
  return (
    <div>
      <div>
        <Text>나만의 루틴을 만들어보세요</Text>
        {/* <img src={MyRoutine} alt="MyRoutine" /> */}
      </div>

      <div>
        <Text>그룹 루틴에 가입해보세요</Text>
        {/* <img src={GroupRoutines} alt="GroupRoutines" /> */}
      </div>

      <div>
        <Text>함께 루틴을 실천하세요</Text>
        {/* <img src={MyGroupRoutine} alt="MyGroupRoutine" /> */}
      </div>
    </div>
  );
}

export default EveryRoutineInfo;
