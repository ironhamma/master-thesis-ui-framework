import { styled } from "styled-components";

export const StyledOutput = styled.output`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing.padding.medium}px;
  margin: ${({ theme }) => theme.spacing.margin.small}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.flex.gap.medium}px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.primary.text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;
