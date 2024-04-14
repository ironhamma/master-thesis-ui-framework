import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.text};
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.general.fontSize}px;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  transition: background-color 0.3s ease;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
