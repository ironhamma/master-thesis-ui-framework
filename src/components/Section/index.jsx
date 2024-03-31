import React from "react";
import propTypes from "prop-types";
import { StyledSection, StyledSectionTitle } from "./style";

const Section = ({ title, text, children, ...props }) => {
  return (
    <StyledSection {...props}>
      {title && title.length !== 0 && (
        <StyledSectionTitle>{title}</StyledSectionTitle>
      )}
      {text}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
};

Section.defaultProps = {
  title: "",
  text: "",
};

export default Section;
