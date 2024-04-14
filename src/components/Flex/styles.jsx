import { styled } from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ theme }) => theme.flex.gap.medium}px;
  width: 100%;
`;
