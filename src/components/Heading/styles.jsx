import { styled } from "styled-components";

export const StyledHeading1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-style: ${({ theme }) => theme.typography.h1.fontStyle};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  color: ${({ theme }) =>
    theme.typography.h1.color || theme.typography.general.color};
`;

export const StyledHeading2 = styled.h2`
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-style: ${({ theme }) => theme.typography.h2.fontStyle};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
  color: ${({ theme }) =>
    theme.typography.h2.color || theme.typography.general.color};
`;

export const StyledHeading3 = styled.h3`
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  font-size: ${({ theme }) => theme.typography.h3.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  font-style: ${({ theme }) => theme.typography.h3.fontStyle};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
  color: ${({ theme }) =>
    theme.typography.h3.color || theme.typography.general.color};
`;

export const StyledHeading4 = styled.h1`
  font-family: ${({ theme }) => theme.typography.h4.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  font-style: ${({ theme }) => theme.typography.h4.fontStyle};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
  color: ${({ theme }) =>
    theme.typography.h4.color || theme.typography.general.color};
`;

export const StyledHeading5 = styled.h1`
  font-family: ${({ theme }) => theme.typography.h5.fontFamily};
  font-size: ${({ theme }) => theme.typography.h5.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  font-style: ${({ theme }) => theme.typography.h5.fontStyle};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing};
  color: ${({ theme }) =>
    theme.typography.h5.color || theme.typography.general.color};
`;

export const StyledHeading6 = styled.h1`
  font-family: ${({ theme }) => theme.typography.h6.fontFamily};
  font-size: ${({ theme }) => theme.typography.h6.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  font-style: ${({ theme }) => theme.typography.h6.fontStyle};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing};
  color: ${({ theme }) =>
    theme.typography.h6.color || theme.typography.general.color};
`;