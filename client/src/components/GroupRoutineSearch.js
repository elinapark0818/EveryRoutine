import React, { useState } from "react";
import styled from "styled-components";

const TagSpan = styled.div`
  color: #697f6e;
  border: 3px solid #697f6e;
  font-size: 20px;
  font-weight: 500;
  padding: 15px 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const TagButtonDiv = styled.div`
  text-align: center;
`;

const TagButton = styled.button`
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em 2em;
  background-color: gray;
  border: none;
  border-radius: 5em;
  cursor: pointer;
  &.checked {
    background-color: #697f6e;
  }
`;

export default function GroupRoutineSearch() {
  const [tagCheck, setTagCheck] = useState([
    { name: "ALL", checked: 1 },
    { name: "생활", checked: 0 },
    { name: "건강", checked: 0 },
    { name: "운동", checked: 0 },
    { name: "미션", checked: 0 },
  ]);

  const tagCheckHandler = (e) => {
    if (tagCheck[e.target.id].checked) tagCheck[e.target.id].checked = 0;
    else tagCheck[e.target.id].checked = 1;
    setTagCheck(tagCheck);
  };

  return (
    <div>
      <TagSpan>
        &#10024; 아직 가입하지 않은 그룹 루틴이 이렇게나 많아요! &#10024;
      </TagSpan>
      <TagButtonDiv>
        {tagCheck.map((el, idx) => (
          <TagButton
            key={idx}
            name={el.name}
            id={idx}
            onClick={(e) => tagCheckHandler(e)}
            className={el.checked ? "checked" : "none"}
          >
            # {el.name}
          </TagButton>
        ))}
      </TagButtonDiv>
    </div>
  );
}
