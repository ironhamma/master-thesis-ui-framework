import { styled } from "styled-components";

export const StyledColorpickerLabel = styled.label`
  color: ${({ theme, mode }) => theme.colors.primary.text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  padding-right: ${({ theme }) => theme.spacing.padding.small}px;
`;

export const StyledColorPickerInput = styled.input`
  margin-left: ${({ theme }) => theme.spacing.margin.small}px;
`;
