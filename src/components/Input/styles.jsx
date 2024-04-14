import { styled } from "styled-components";

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  margin: ${({ theme }) => theme.spacing.margin.small}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: ${({ theme }) => theme.typography.general.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.general.fontWeight};
  font-style: ${({ theme }) => theme.typography.general.fontStyle};
  line-height: ${({ theme }) => theme.typography.general.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.general.letterSpacing};
  color: ${({ theme }) => theme.colors.text};
`;
