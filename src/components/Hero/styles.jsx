import { styled } from "styled-components";

export const StyledHeroContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledHero = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 31.58%;
  position: relative;
  ${({ image }) =>
    image && image.length !== 0 && "background-image: url(" + image + ");"}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const StyledHeroContent = styled.hgroup`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.padding.medium}px;
  gap: ${({ theme }) => theme.flex.gap.medium}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const StyledHeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 2;
`;
