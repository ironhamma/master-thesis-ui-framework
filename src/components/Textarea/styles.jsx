import { styled } from "styled-components";

export const StyledTextarea = styled.textarea`
  background-color: ${({ theme, mode }) => theme.colors.primary.dark};
  color: ${({ theme, mode }) => theme.colors.primary.text};
  border: 1px solid ${({ theme, mode }) => theme.colors.primary.border};
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  margin: ${({ theme }) => theme.spacing.margin.small}px;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  width: 100%;
`;
