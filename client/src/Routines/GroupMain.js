import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import GroupRoutines from "./GroupRoutines";

function GroupMain() {
  const [isMain, setIsMain] = useState(true);

  const [selectedGroupId, setSelectedGroupId] = React.useState(1);

  console.log("혹시?", selectedGroupId);

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
