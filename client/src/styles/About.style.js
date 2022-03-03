import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;

  & h1 {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 70px;
    height: 30px;
    padding: 1em;
    transform: translateY(-40px);
  }

  & p {
    display: flex;
    justify-content: center;
    padding: 1em;
  }
`;

export const AboutTop = styled.div`
  margin-top: 5em;
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10em;
`;
