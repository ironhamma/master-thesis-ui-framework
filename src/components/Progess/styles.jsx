import { styled } from "styled-components";

export const StyledProgressContainer = styled.div`
  position: relative;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  background-color: ${({ theme, mode }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.margin.small}px;
`;

export const StyledMeterContainer = styled.div`
  position: relative;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  background-color: ${({ theme, mode }) => theme.colors.info.main};
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.margin.small}px;
`;

export const StyledProgressBar = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: ${({ value, max }) => `${(value / max) * 100}%`};
  background-color: ${({ theme, mode }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
`;

export const StyledMeterLow = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: ${({ low }) => `${low}%`};
  background-color: ${({ theme, mode }) => theme.colors.error.main};
  z-index: 3;
  opacity: 0.7;
`;

export const StyledMeterHigh = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: ${({ high }) => `${high}%`};
  background-color: ${({ theme, mode }) => theme.colors.warning.main};
  z-index: 2;
  opacity: 0.7;
`;

export const StyledMeterOptimum = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  left: ${({ optimum }) => `${optimum}%`};
  width: 4px;
  background-color: ${({ theme, mode }) => theme.colors.success.main};
  z-index: 3;
  opacity: 0.7;
`;

export const StyledMeterValue = styled.span`
  position: absolute;
  height: 30%;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: ${({ value }) => `${value}%`};
  background-color: ${({ theme, mode }) => theme.colors.primary.main};
  z-index: 4;
  border-radius: ${({ theme }) =>
    `0 ${theme.border.radius.medium}px ${theme.border.radius.medium}px 0`};
`;
