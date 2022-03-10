import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import GroupRoutines from "./GroupRoutines";

function GroupMain({ changeModeToGroup }) {
  const [isMain, setIsMain] = useState(true);
  const [selectedGroupId, setSelectedGroupId] = React.useState(1);

  const sendGroupId = (id) => {
    setSelectedGroupId(id);
  };

  const settingMainMode = () => {
    setIsMain(true);
  };
  const settingDetailMode = () => {
    setIsMain(false);
  };

  return (
    <div>
      {isMain ? (
        <GroupRoutines
          settingDetailMode={settingDetailMode}
          sendGroupId={sendGroupId}
        />
      ) : (
        <Outlet context={[selectedGroupId, setSelectedGroupId]} />
      )}
    </div>
  );
}

export default GroupMain;
