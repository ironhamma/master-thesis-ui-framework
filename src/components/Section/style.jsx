import { styled } from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.margin.large}px
    ${({ theme }) => theme.spacing.margin.none}px;
  padding: ${({ theme }) => theme.spacing.padding.medium}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledSectionTitle = styled.p`
  color: ${({ theme }) => theme.typography.general.color};
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: 32px;
  font-weight: bold;
`;
