import React from "react";
import styled from "styled-components";
import logo from "../assets/er_logo.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const CardCon = styled(Slider)`
  .slick-track {
    display: flex;
  }
  .slick-list {
    flex: 1 0 0;
    margin: 0 auto;
  }
  .slick-slide {
  }
  .slick-slide div {
    padding: 10px;
    cursor: pointer;
  }
`;
const Card = styled.div`
  border-radius: 1em;
  background-color: #ddeede;
  min-height: 230px;
`;
const NewCard = styled.div`
  border-radius: 1em;
  background-color: #ececec;
  min-height: 230px;
`;
const BigPlus = styled.div`
  line-height: 200px;
  text-align: center;
  font-size: 50px;
`;

const CardImg = styled.img`
  background-color: white;
  border-radius: 10%;
`;
const CardBody = styled.div`
  padding-top: 10px;
`;
const CardTitle = styled.div``;
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function GroupRoutineMyList({ Link, openGropRoutineModal }) {
  return (
    <CardCon {...settings}>
      <NewCard
        onClick={() => {
          openGropRoutineModal();
        }}
      >
        <BigPlus>+</BigPlus>
      </NewCard>

      <Link to="/groupRoutine">
        <Card>
          <CardImg src={logo} alt="Card image" />
          <CardBody>
            <CardTitle>매일 물 2L 마시기</CardTitle>
          </CardBody>
        </Card>
      </Link>

      <Card>
        <CardImg src={logo} alt="Card image" />
        <CardBody>
          <CardTitle>이부자리 정리</CardTitle>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={logo} alt="Card image" />
        <CardBody>
          <CardTitle>이부자리 정리</CardTitle>
        </CardBody>
      </Card>
    </CardCon>
  );
}
