import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background: white;
  border-radius: 5px;
  margin-top:-60px;
  color: black;
  width: 220px;
  font-size: 16px;
  cursor: pointer;
  border: 1.5px solid black;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: black;
    border: 1.5px solid black;
    cursor: pointer;
    color: white;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`

background-color:black;
border: 1.5px solid black;
color: white;
  
  &:hover {
    background-color: white;
    border: 1.5px solid black;
    cursor: pointer;
    color:black;
    transition: 0.3s background ease-in;
  }
`;