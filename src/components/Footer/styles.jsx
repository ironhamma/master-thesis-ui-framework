import { styled } from "styled-components";

export const StyledFooterContainer = styled.div`
  width: 100%;
`;

export const StyledSecondaryFooter = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.flex.gap.large}px;
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: ${({ theme }) => theme.spacing.padding.small}px;
`;

export const StyledFooterContactText = styled.p`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: 16px;
`;

export const StyledFooterContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: 16px;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  ${({ modular }) => !modular && "justify-content: space-between;"}
  gap: ${({ theme }) => theme.flex.gap.large}px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing.padding.small}px;
`;

export const StyledFooterLogo = styled.img`
  max-width: 200px;
  max-height: 50px;
`;

export const StyledFooterNav = styled.nav``;

export const StyledFooterNavUl = styled.ul`
  display: flex;
  height: 100%;
  gap: ${({ theme }) => theme.flex.gap.large}px;
  list-style-type: none;
`;

export const StyledFooterNavUlLi = styled.li`
  height: 100%;
`;

export const StyledFooterA = styled.a`
  color: ${({ theme }) => theme.colors.primary.text};
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: 18px;
`;

export const StyledFooterCopyR = styled.p`
  color: ${({ theme }) => theme.colors.primary.text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  font-size: 12px;
`;
