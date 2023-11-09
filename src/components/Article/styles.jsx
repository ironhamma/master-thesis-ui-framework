import { styled } from "styled-components";

export const StyledArticle = styled.article`
  background-color: ${({ theme, mode }) => theme.colors[mode].main};
  padding: ${({ theme }) => theme.spacing.padding.medium}px;
  margin: ${({ theme }) => theme.spacing.margin.small}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.flex.gap.medium}px;
  text-align: justify;
  color: ${({ theme, mode }) => theme.colors[mode].text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;

