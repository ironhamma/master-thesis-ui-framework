import React from "react";
import { styled } from "styled-components";

const DarkToggle = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ theme }) => theme.colors.action.background};
  color: ${({ theme }) => theme.colors.action.color};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const DarkModeToggle = ({ onClick }) => {
  return <DarkToggle onClick={onClick}>Toggle Dark mode</DarkToggle>;
};

export default DarkModeToggle;
