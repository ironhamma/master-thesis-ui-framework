import React from "react";
import { styled } from "styled-components";

const DarkToggle = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #fce300;
  color: black;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
`;

const DarkModeToggle = ({ onClick }) => {
  return <DarkToggle onClick={onClick}>Toggle Dark mode</DarkToggle>;
};

export default DarkModeToggle;
