import { styled } from "styled-components";

export const StyledSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.general.fontSize}px;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  cursor: pointer;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const StyledOption = styled.option`
  font-size: ${({ theme }) => theme.typography.general.fontSize}px;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;
