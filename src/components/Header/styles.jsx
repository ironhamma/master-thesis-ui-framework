import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 50px;
  position: ${({sticky}) => sticky ? 'sticky' : 'relative'};
  ${({sticky}) => sticky && 'top: 0; left: 0; z-index: 20;'}
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.flex.gap.large}px;
`;

export const StyledHeaderTitle = styled.span`
color: ${({ theme }) => theme.colors.primary.text};
font-family: ${({ theme }) => theme.typography.general.fontFamily};
font-size: 24px;
`;

export const StyledNav = styled.nav`
  height: 100%;
  margin-left: auto;
`;

export const StyledNavUl = styled.ul`
  display: flex;
  height: 100%;
  gap: ${({ theme }) => theme.flex.gap.large}px;
  list-style-type: none;
`;

export const StyledNavUlLi = styled.li`
  height: 100%;
`;

export const StyledNavA = styled.a`
  color: ${({ theme }) => theme.colors.primary.text};
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: 18px;
`;
