import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/er_logo.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Modal from "react-modal";
import ModalGroupRoutine from "../components/ModalGroupRoutine";

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
    margin-right: 10px;
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

export default function GroupRoutineMyList({ Link }) {
  const [groupRoutineIsOpen, setGroupRoutineIsOpen] = useState(false);

  const closeGroupRoutineModal = () => {
    setGroupRoutineIsOpen(false);
  };

  return (
    <CardCon {...settings}>
      <NewCard
        onClick={() => {
          setGroupRoutineIsOpen(true);
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

      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={groupRoutineIsOpen}
        onRequestClose={() => setGroupRoutineIsOpen(false)}
      >
        <ModalGroupRoutine closeGroupRoutineModal={closeGroupRoutineModal} />
      </Modal>
    </CardCon>
  );
}
