import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import DateSliderGroup from "../components/DateSliderGroup";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Container = styled.div`
  border: 3px solid #697f6e;
  width: 800px;
  margin-left: calc((100% - 800px) / 2);
  padding: 30px;
  margin-bottom: 50px;
`;
const GroupProgress = styled(ProgressBar)`
  width: 80%;
  margin-left: 10%;
`;
const Label = styled.div``;
const GroupMembers = styled.div``;
const GroupInfo = styled.div`
  background-color: #ddeede;
`;
const GroupInfoTitle = styled.div`
  border: 3px solid #697f6e;
  color: #697f6e;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 30px;
  margin-bottom: 30px;
`;
const GroupInfoContents = styled.div`
  padding: 30px;
`;
const GroupInfoTags = styled.div`
  padding: 30px;
`;
const TagButton = styled.button`
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em 2em;
  background-color: #697f6e;
  border: none;
  border-radius: 5em;
`;
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
const CommentButton = styled(Button)`
  margin-left: calc(50% - 110px);
`;
const GroupCommentAdd = styled.div``;
const GroupCommentList = styled.ul`
  width: 80%;
  margin-left: 10%;
  margin-bottom: 50px;
`;
const GroupComment = styled.li`
  margin-bottom: 5px;
  list-style: none;
  color: #697f6e;
`;
const GroupCommentNick = styled.div`
  display: inline;
  padding: 0 10px;
  font-weight: 500;
`;
const GroupCommentContent = styled.div`
  display: inline;
  padding: 0 10px;
`;
const GroupCommentTime = styled.div`
  display: inline;
  padding: 0 10px;
`;
const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 60%;
  margin: 50px 0;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
`;
const Hrstyle = styled.hr`
  border-top: 1px dotted #697f6e;
  width: 100%;
  margin: 30px 0;
`;

const dummyData = [
  { name: "chovy", comment: "오늘도 다녀갑니다~ 성공!", time: "07:55" },
  { name: "침착맨", comment: "침착하게 성공했습니다.", time: "14:23" },
  {
    name: "대황젠지",
    comment: "젠지 승리를 기원하며 줄넘기 성공!",
    time: "19:37",
  },
];

// GET : localhost:4000/group-routine/select?id=3?date=
// (id=3 은 그룹루틴의 database id)

// {
//     "data": {
//         "id": 3,
//         "routine_name": "아침 조깅 3km",
//         "editor_id": 1,
//         "tag_name": "health,lifestyle,workout",
//         "image": "",
//         "contents": "아침 7시에 조깅하는 루틴입니다. 조깅으로 시작하여 활기찬 하루를 만들어보아요!!",
//         "createdAt": "2022-03-10T00:31:13.000Z",
//         "updatedAt": "2022-03-10T00:31:13.000Z"
//     },
//     "comments": [],
//     "registed": true,
//     "message": "가입한 그룹 루틴 데이터"
// }

const serverURL = "http://localhost:4000/group-routine";
const todayDate = Date.now();

function GroupRoutine() {
  const [isMyGroup, setIsMyGroup] = useState(true);
  const [groupComment, setGroupComment] = useState(dummyData);
  const [selectedGroupId, setSelectedGroupId] = useOutletContext();

  useEffect(() => {
    const getGroupDataInfo = async () => {
      try {
        const response = await axios.get(
          serverURL + "/select?id=" + selectedGroupId + "&date=" + todayDate
        );
        if (response.status === 200) {
          if (response.data.registed) setIsMyGroup(true);
          else setIsMyGroup(false);
          console.log("가입여부===>", response.data.registed);
          console.log("그룹이름===>", response.data.data.routine_name);
          console.log(response.data);
          // const datesInfo = response.data.selectedFindDateInfo;
        }
        // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
      }
    };

    getGroupDataInfo();
  }, []);

  return (
    <>
      {isMyGroup ? (
        <Container>
          <GroupInfo>
            <GroupInfoTitle>
              &#127947; 하루에 줄넘기 1,000개 하기!
            </GroupInfoTitle>
          </GroupInfo>
          <DateSliderGroup />
          <GroupCommentAdd>
            <StyledInput
              type="text"
              placeholder="오늘의 달성 내용과 함께 루틴 체크를 남겨주세요!"
            ></StyledInput>
            <Button>ok</Button>
          </GroupCommentAdd>
          <GroupCommentList>
            {groupComment.map((el, idx) => (
              <GroupComment key={idx}>
                <GroupCommentNick>&#128526; {el.name}</GroupCommentNick>
                <GroupCommentContent>{el.comment}</GroupCommentContent>
                <GroupCommentTime>{el.time}</GroupCommentTime>
              </GroupComment>
            ))}
          </GroupCommentList>
          <Hrstyle />
          <GroupInfoTitle>우리 그룹의 오늘 루틴 달성률</GroupInfoTitle>
          <GroupProgress
            completed={40}
            height="30px"
            bgColor="#697f6e"
            BaseBgColor="#ececec"
          />
          <CommentButton>이 그룹 탈퇴하기</CommentButton>
        </Container>
      ) : (
        <Container>
          <GroupInfo>
            <GroupInfoTitle>하루에 줄넘기 1,000개 하기!</GroupInfoTitle>
            <GroupInfoContents>
              안녕하세요, 하루에 줄넘기 천개씩을 목표로 하는 건강 루틴
              그룹입니다.
              <br />
              똑같은 이야기를 몇 번을 쓰는건지 모르겠습니다.
              <br />
              이정도면 어디 저장해놓고 복붙할법도 한데 매번 새로 그냥 쓰는 것도
              참 대~단합니다.
              <br />
            </GroupInfoContents>
            <GroupInfoTags>
              <TagButton># 건강</TagButton>
              <TagButton># 운동</TagButton>
            </GroupInfoTags>
          </GroupInfo>
          <hr />
          <Label>이 루틴 그룹에 참여중인 멤버</Label>
          <GroupMembers>7 명</GroupMembers>
          <Label>이 루틴 그룹의 평균 루틴 달성률</Label>
          <GroupProgress
            completed={70}
            bgColor="#697f6e"
            BaseBgColor="#ececec"
          />
          <Button>이 그룹 가입하기</Button>
        </Container>
      )}
    </>
  );
}

export default GroupRoutine;
