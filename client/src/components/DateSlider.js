import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
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
  background-color: #697f6e;
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

const dummyDates = [
  { month: 2, date: 25, yo_il: "금" },
  { month: 2, date: 26, yo_il: "토" },
  { month: 2, date: 27, yo_il: "일" },
  { month: 2, date: 28, yo_il: "월" },
  { month: 3, date: 1, yo_il: "화" },
  { month: 3, date: 2, yo_il: "수" },
  { month: 3, date: 3, yo_il: "목" },
  { month: 3, date: 4, yo_il: "금" },
  { month: 3, date: 5, yo_il: "토" },
  { month: 3, date: 6, yo_il: "일" },
  { month: 3, date: 7, yo_il: "월" },
  { month: 3, date: 8, yo_il: "화" },
  { month: 3, date: 9, yo_il: "수" },
  { month: 3, date: 10, yo_il: "목" },
  { month: 3, date: 11, yo_il: "금" },
];

const serverURL = "http://localhost:4000/user-routine";

export default function DateSlider() {
  const [dates, setDates] = useState(dummyDates);

  useEffect(() => {
    const getDatesInfo = async () => {
      try {
        const date = new Date();
        const today = date.getDate();
        const todayMonth = date.getMonth() + 1;

        const response = await axios({
          method: "post",
          url: serverURL,
          data: { date: { month: todayMonth, date: today } },
        });
        if (response.status === 200) {
          const datesInfo = response.data.findDateInfo;
          setDates(datesInfo);
        }
        // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
      }
    };

    getDatesInfo();
  }, []);

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
        {dates.slice(0, 14).map((el, idx) => (
          <DateCard key={idx}>
            <div className="date">
              {el.month}/{el.date}
            </div>
            <div className="dow">{el.yo_il}</div>
          </DateCard>
        ))}
        {dates.slice(14).map((el, idx) => (
          <DateCardToday key={idx}>
            <div className="date">
              {el.month}/{el.date}
            </div>
            <div className="dow">{el.yo_il}</div>
          </DateCardToday>
        ))}
      </DateSliderList>
    </DateSliderCon>
  );
}
