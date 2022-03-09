import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/er_logo.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import AOS from "aos";

const CardCon = styled(Slider)`
  .slick-track {
  }
  .slick-list {
  }
  .slick-slide {
  }
  .slick-slide div {
    padding: 15px;
  }
`;
const Card = styled.div`
  background-color: #ddeede;
  min-height: 235px;
  box-shadow: 5px 5px #697f6e;
  cursor: pointer;
`;
const NewCard = styled(Card)`
  background-color: #ececec;
`;
const BigPlus = styled.div`
  line-height: 175px;
  text-align: center;
  font-size: 50px;
  color: #697f6e;
`;

const CardImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background-color: white;
`;
const CardBody = styled.div`
  padding-top: 10px;
`;
const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #697f6e;
  margin: 0 -15px -10px -15px;
  background-color: white;
  padding: 5px !important;
`;
const CardLink = styled(Link)`
  color: #697f6e;
  &:link {
    text-decoration: none;
    color: #697f6e;
  }
`;
const TagSpan = styled.div`
  color: #697f6e;
  border: 3px solid #697f6e;
  font-size: 20px;
  font-weight: 500;
  padding: 15px 20px;
  margin-bottom: 10px;
  text-align: center;
`;
const settings = {
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  beforeChange: () => (dragging = true),
  afterChange: () => (dragging = false),
};

AOS.init({
  duration: 1200,
});

const serverURL = "http://localhost:4000/group-routine";

const dummyData = [
  {
    contents:
      "하루동안 물을 2L 마시는 루틴입니다. 출석률에 따라 물양 조정합니다.",
    createdAt: "2022-03-09T12:35:12.000Z",
    editor_id: 1,
    id: 1,
    image:
      "https://dmwedtsa0n9p4.cloudfront.net/media/uploads/2021/07/12/06_-1.png",
    routine_name: "물 2L 마시기",
    tag_name: "[health, lifestyle, workout]",
    updatedAt: "2022-03-09T12:35:12.000Z",
  },
];

let dragging = false;

export default function GroupRoutineMyList({ openGropRoutineModal }) {
  const [myGroupRoutineList, setMyGroupRoutineList] = useState(dummyData);

  useEffect(() => {
    const getMyGroupRoutineList = async () => {
      try {
        const response = await axios
          .get(serverURL)
          .catch((err) => console.log(err));
        if (response.status === 200) {
          setMyGroupRoutineList(response.data.data);
        } else {
          console.log(response.status);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getMyGroupRoutineList();
  }, []);

  return (
    <>
      <TagSpan>&#128293; 오늘도 다 함께 힘차게 달려봐요! &#128293;</TagSpan>
      <CardCon {...settings}>
        <NewCard
          data-aos="flip-right"
          onClick={() => {
            openGropRoutineModal();
          }}
        >
          <BigPlus>+</BigPlus>
        </NewCard>

        {myGroupRoutineList.map((el) => (
          <CardLink key={el.id} id={el.id} to="/groupRoutine">
            <Card
              data-aos="flip-right"
              onClick={(e) => dragging && e.preventDefault()}
            >
              <CardImg src={el.image ? el.image : logo} alt="Card image" />
              <CardBody>
                <CardTitle>&#128526; {el.routine_name}</CardTitle>
              </CardBody>
            </Card>
          </CardLink>
        ))}
      </CardCon>
    </>
  );
}
