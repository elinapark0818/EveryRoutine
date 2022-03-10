import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import DateSliderGroup from "../components/DateSliderGroup";
import axios from "axios";
import { useOutletContext, useParams } from "react-router-dom";

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
  cursor: pointer;
`;
const CommentButton = styled(Button)`
  margin-left: calc(50% - 110px);
  margin-top: 100px;
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
const GroupProgressComment = styled.span``;

const commentData = [
  "오늘은 아직 참여율이 저조해요! 나부터 루틴 달성해서 힘을 보태주세요!",
  "좋은 출발이네요! 이대로 우리 모두 루틴을 달성해봐요!",
  "잘 하고 있어요! 조금만 더 힘내면 우리 모두 루틴을 달성할 수 있어요!",
  "거의 다 왔어요! 아직 참여하지 않은 그룹원을 독려해줘요.",
  "축하해요! 모든 그룹원이 오늘 루틴을 달성했어요.",
];

const selectComment = (num) => {
  const result = "";
  if (num === 0) result = commentData[0];
  if (num < 30) result = commentData[1];
  if (num < 60) result = commentData[2];
  if (num < 100) result = commentData[3];
  if (num === 100) result = commentData[4];
  return result;
};

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
//         "updatedAt": "2022-03-10T00:31:13.000Z",
//         "goal" : 60,
//         "editor" : true,
//     },
//     "comments": [],
//     "registed": true,
//     "message": "가입한 그룹 루틴 데이터"
// }

const serverURL = "http://localhost:4000/group-routine";
const todayDate = Date.now();

function GroupRoutine({ settingLogin }) {
  const [isMyGroup, setIsMyGroup] = useState(true);
  const [groupTitle, setGroupTitle] = useState("로딩중...");
  const [groupContent, setGroupContent] = useState("로딩중...");
  const [goalRate, setGoalRate] = useState(60);
  const [goalComment, setGoalComment] = useState("");
  const [groupComment, setGroupComment] = useState(dummyData);
  const [newComment, setNewComment] = useState("");
  const [amIeditor, setAmIeditor] = useState(false);
  const { id } = useParams();
  const [selectDate, setSelectDate] = useState(Date.now());

  const changeSelectDate = (date) => {
    setSelectDate(date);
  };

  useEffect(() => {
    settingLogin();
    const getGroupDataInfo = async () => {
      try {
        const response = await axios.get(
          serverURL + "/select?id=" + id + "&date=" + todayDate
        );
        if (response.status === 200) {
          // 가입된 그룹인지 먼저 파악하여 조건부 렌더링 처리
          if (response.data.registed) setIsMyGroup(true);
          else setIsMyGroup(false);
          setGroupTitle(response.data.data.routine_name);
          setGroupContent(response.data.data.contents);
          setGroupComment(response.data.comments);
          setGoalRate(response.data.goal);
          setAmIeditor(response.data.editor);

          // const selectedComment = selectComment(goalRate);
          // setGoalComment(selectedComment);
        }
        // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
      }
    };

    getGroupDataInfo();
  }, []);

  // 다른 날짜 클릭 시
  useEffect(() => {
    const getGroupDataInfo = async () => {
      try {
        const response = await axios.get(
          serverURL + "/select?id=" + id + "&date=" + selectDate
        );
        if (response.status === 200) {
          // 가입된 그룹인지 먼저 파악하여 조건부 렌더링 처리
          setGroupComment(response.data.comments);
          setGoalRate(response.data.goal);
          setAmIeditor(response.data.editor);

          // const selectedComment = selectComment(goalRate);
          // setGoalComment(selectedComment);
        }
        // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
      }
    };

    getGroupDataInfo();
  }, [selectDate, id]);

  // 댓글 작성 시
  const sendNewComment = async () => {
    try {
      const response = await axios.post(serverURL + "/comment?id=" + id, {
        comment: newComment,
      });
      if (response.status === 200) {
      }
      // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isMyGroup ? (
        <Container>
          <GroupInfo>
            <GroupInfoTitle>&#127947; {groupTitle}</GroupInfoTitle>
          </GroupInfo>

          <DateSliderGroup
            changeSelectDate={changeSelectDate}
            selectDate={selectDate}
          />

          {Date(selectDate) === Date(Date.now()) ? (
            <GroupCommentAdd>
              <StyledInput
                type="text"
                placeholder="오늘의 달성 내용과 함께 루틴 체크를 남겨주세요!"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></StyledInput>
              <Button onClick={() => sendNewComment()}>ok</Button>
            </GroupCommentAdd>
          ) : (
            ""
          )}
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
            completed={goalRate}
            height="30px"
            bgColor="#697f6e"
            BaseBgColor="#ececec"
          />
          <GroupProgressComment>{goalComment}</GroupProgressComment>
          {amIeditor ? (
            <CommentButton>이 그룹 삭제하기</CommentButton>
          ) : (
            <CommentButton>이 그룹 탈퇴하기</CommentButton>
          )}
        </Container>
      ) : (
        <Container>
          <GroupInfo>
            <GroupInfoTitle>&#127947; {groupTitle}</GroupInfoTitle>
            <GroupInfoContents>{groupContent}</GroupInfoContents>
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
