import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import GroupRoutineMyList from "./GroupRoutineMyList";
import GroupRoutineNewList from "./GroupRoutineNewList";
import GroupRoutineSearch from "./GroupRoutineSearch";

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
  return (
    <div>
      <Outlet />
      <Container>
        <Con>
          <GroupRoutineMyList Link={Link} />
        </Con>
        <hr />
        <Con>
          <GroupRoutineSearch />
        </Con>
        <Con>
          <GroupRoutineNewList Link={Link} />
        </Con>
      </Container>
    </div>
  );
}
export default GroupRoutineMain;
