import { styled } from "styled-components";

export const StyledFieldSet = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.colors.primary.text};
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  padding: ${({ theme }) => theme.spacing.padding.large}px;
  margin: ${({ theme }) => theme.spacing.margin.medium}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.flex.gap.medium}px;
  position: relative;
`;
