import React from "react";
import styled, { keyframes } from "styled-components";
import FE_elina from "../assets/FE_elina.gif";
import smile from "../assets/smile.png";

const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  width: 100%;

  & p {
    display: flex;
    justify-content: center;
    padding: 1em;
  }
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10em;
`;

const ColorChange = keyframes`
    0% {
        color: #697f6e;
      }
      20% {
        color: lightgray;
      }
      40% {
        color: #697f6e;
      }
      60% {
        color: gray;
      }
      80% {
        color: #697f6e;
      }
      100% {
        color: #697f6e;
      }
`;

const Color = styled.h1`
  animation: ${ColorChange} 5s linear infinite;
  width: 100%;
  height: auto;
  font-size: 5em;
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const GifDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5em 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

function About() {
  return (
    <AboutBody>
      <AboutContainer>
        <AboutDiv>
          <Color> ABOUT US</Color>

          <GifDiv>
            <img alt="elina" src={FE_elina} style={{ marginRight: "0.5em" }} />
            <img alt="elina" src={FE_elina} style={{ marginRight: "0.5em" }} />
            <img alt="elina" src={FE_elina} style={{ marginRight: "0.5em" }} />
            <img alt="elina" src={FE_elina} />
          </GifDiv>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "1em",
              margin: "5em 0",
            }}
          >
            <div style={{ paddingRight: "5em" }}>
              <img alt="smile" src={smile} style={{ width: "20em" }} />
            </div>
            <div>
              <h1>Team : YOF</h1>
              <h3>
                " 함께 만들어가는 스마트한 생활 <br />
                하나씩 달성해나가는 좋은 습관 <br />
                모두의 루틴으로 하루를 완성해보세요."
              </h3>
            </div>
          </div>

          <div style={{ margin: "3em" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "1em",
              }}
            >
              <div style={{ paddingRight: "5em" }}>
                <img alt="smile" src={smile} style={{ width: "10em" }} />
              </div>
              <div>
                <h1>김영빈</h1>
                <h3>Position: Back-End</h3>
                <h3>꽃보다 아름다운 우리의 팀장님</h3>
              </div>
            </div>
          </div>

          <div style={{ margin: "3em" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "1em",
              }}
            >
              <div style={{ paddingRight: "5em" }}>
                <img alt="smile" src={smile} style={{ width: "10em" }} />
              </div>
              <div>
                <h1>김영빈</h1>
                <h3>Position: Back-End</h3>
                <h3>꽃보다 아름다운 우리의 팀장님</h3>
              </div>
            </div>
          </div>

          <div style={{ margin: "3em" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "1em",
              }}
            >
              <div style={{ paddingRight: "5em" }}>
                <img alt="smile" src={smile} style={{ width: "10em" }} />
              </div>
              <div>
                <h1>김영빈</h1>
                <h3>Position: Back-End</h3>
                <h3>꽃보다 아름다운 우리의 팀장님</h3>
              </div>
            </div>
          </div>

          <div style={{ margin: "3em" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "1em",
              }}
            >
              <div style={{ paddingRight: "5em" }}>
                <img alt="smile" src={smile} style={{ width: "10em" }} />
              </div>
              <div>
                <h1>김영빈</h1>
                <h3>Position: Back-End</h3>
                <h3>꽃보다 아름다운 우리의 팀장님</h3>
              </div>
            </div>
          </div>
        </AboutDiv>
      </AboutContainer>
    </AboutBody>
  );
}

export default About;
