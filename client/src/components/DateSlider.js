import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const DateSliderList = styled(Slider)`
  .slick-track {
  }
  .slick-list {
  }
  .slick-slide {
  }
  .slick-slide div {
    /* margin-right: 10px; */
    padding: 5px;
    text-align: center;
    cursor: pointer;
  }
`;

const DateCard = styled.div`
  background-color: #ececec;
  border-radius: 0.5em;
  .date {
    font-size: 15px;
  }
  .dow {
    font-weight: 500;
    font-size: 25px;
  }
`;

const DateCardToday = styled.div`
  background-color: #ff1818;
  color: white;
  border-radius: 0.5em;
  .date {
    font-size: 15px;
  }
  .dow {
    font-weight: 500;
    font-size: 25px;
  }
`;

const DateSliderCon = styled.div``;
export default function DateSlider() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 5,
    initialSlide: 5,
  };

  return (
    <DateSliderCon>
      <DateSliderList {...settings}>
        <DateCard>
          <div className="date">3/1</div>
          <div className="dow">화</div>
        </DateCard>
        <DateCard>
          <div className="date">3/2</div>
          <div className="dow">수</div>
        </DateCard>
        <DateCard>
          <div className="date">3/3</div>
          <div className="dow">목</div>
        </DateCard>
        <DateCard>
          <div className="date">3/4</div>
          <div className="dow">금</div>
        </DateCard>
        <DateCard>
          <div className="date">3/5</div>
          <div className="dow">토</div>
        </DateCard>
        <DateCard>
          <div className="date">3/6</div>
          <div className="dow">일</div>
        </DateCard>
        <DateCard>
          <div className="date">3/7</div>
          <div className="dow">월</div>
        </DateCard>
        <DateCard>
          <div className="date">3/8</div>
          <div className="dow">화</div>
        </DateCard>
        <DateCard>
          <div className="date">3/9</div>
          <div className="dow">수</div>
        </DateCard>
        <DateCard>
          <div className="date">3/10</div>
          <div className="dow">목</div>
        </DateCard>
        <DateCard>
          <div className="date">3/11</div>
          <div className="dow">금</div>
        </DateCard>
        <DateCard>
          <div className="date">3/12</div>
          <div className="dow">토</div>
        </DateCard>
        <DateCard>
          <div className="date">3/13</div>
          <div className="dow">일</div>
        </DateCard>
        <DateCard>
          <div className="date">3/14</div>
          <div className="dow">월</div>
        </DateCard>
        <DateCardToday>
          <div className="date">3/15</div>
          <div className="dow">화</div>
        </DateCardToday>
      </DateSliderList>
    </DateSliderCon>
  );
}
