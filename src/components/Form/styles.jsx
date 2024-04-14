import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.flex.gap.medium}px;
  padding: ${({ theme }) => theme.spacing.padding.medium}px;
  margin: ${({ theme }) => theme.spacing.margin.small}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  background-color: ${({ theme, mode }) => theme.colors.primary.light};
  color: ${({ theme, mode }) => theme.colors.primary.text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  width: 100%;
`;
