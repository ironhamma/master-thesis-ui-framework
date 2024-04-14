import { styled } from "styled-components";

export const StyledSuggestionLabel = styled.label`
  color: ${({ theme, mode }) => theme.colors[mode].text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;

export const StyledSuggestionInput = styled.input`
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  padding: ${({ theme }) => theme.spacing.padding.small}px;
`;

export const StyledSuggestionDatalist = styled.datalist`
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;

export const StyledSuggestionOption = styled.option`
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;

export const StyledSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.flex.gap.medium}px;
`;
