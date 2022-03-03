import styled from "styled-components";

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
  margin: 0 5em;

  & h1 {
    font-size: 90px;
    font-weight: 50;
    color: mediumseagreen;
  }

  & p {
    padding: 0;
    font-size: 40px;
    font-weight: 50;
    color: black;
    margin-left: 6em;
  }
`;

export const HomeButton = styled.button`
  color: mediumseagreen;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  background-color: #121619;
  height: 50px;
  width: 180px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 10px 10px;

  &:hover {
    background-color: mediumseagreen;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
`;
