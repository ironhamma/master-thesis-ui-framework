import React from "react";
import PropTypes from "prop-types";
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

Section.PropTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Section.defaultProps = {
  title: "",
  text: "",
};

export default Section;
