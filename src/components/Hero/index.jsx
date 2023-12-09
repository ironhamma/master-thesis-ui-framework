import React from "react";
import PropTypes from "prop-types";
import { StyledHero, StyledHeroContainer, StyledHeroContent } from "./styles";
import { StyledHeroVideo } from "./styles";

const Hero = ({ image, video, children, ...props }) => {
  return (
    <StyledHeroContainer {...props}>
      <StyledHero image={image} />
      <StyledHeroContent>{children}</StyledHeroContent>
      {video && video.length !== 0 && (
        <StyledHeroVideo src={video} autoPlay controls={false} muted />
      )}
    </StyledHeroContainer>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  video: PropTypes.string,
};

Hero.defaultProps = {
  image: "",
  video: "",
};

export default Hero;
