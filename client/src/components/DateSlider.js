import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default function DateSlider() {
  const DateSlider = styled(Slider)`
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

  const DateCard = styled.div`
    background-color: #ececec;
    border-radius: 0.5em;
  `;

  const DateCardToday = styled.div`
    background-color: #ff1818;
    color: white;
    border-radius: 0.5em;
  `;

  const DateSliderCon = styled.div``;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 4,
  };

  return (
    <DateSliderCon>
      <DateSlider {...settings}>
        <DateCard>3/1</DateCard>
        <DateCard>3/2</DateCard>
        <DateCard>3/3</DateCard>
        <DateCard>3/4</DateCard>
        <DateCard>3/5</DateCard>
        <DateCard>3/6</DateCard>
        <DateCard>3/7</DateCard>
        <DateCard>3/8</DateCard>
        <DateCard>3/9</DateCard>
        <DateCard>3/10</DateCard>
        <DateCard>3/11</DateCard>
        <DateCard>3/12</DateCard>
        <DateCardToday>3/13</DateCardToday>
      </DateSlider>
    </DateSliderCon>
  );
}
