import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledLogo,
  StyledNav,
  StyledNavA,
  StyledNavUl,
  StyledNavUlLi,
} from "./styles";

function Header({ sticky, logoSrc, title, items, children, ...props }) {
  const subComponentList = Object.keys(Header);
  const [isModular, setIsModular] = useState(false);

  useEffect(() => {
    subComponentList.forEach((key) =>
      React.Children.map(children, (child) => {
        if (child && child.type && child.type.name && !isModular) {
          setIsModular(true);
        }
      }),
    );
  }, []);

  if (!isModular) {
    return (
      <StyledHeader sticky={sticky} {...props}>
        {logoSrc && logoSrc.length !== 0 && <StyledLogo src={logoSrc} />}
        {title && <StyledHeaderTitle>{title}</StyledHeaderTitle>}
        {items && items.length !== 0 && (
          <StyledNav>
            <StyledNavUl>
              {items.map((item, index) => (
                <StyledNavUlLi key={`${index}_${item.name}`}>
                  <StyledNavA href={item.href}>{item.name}</StyledNavA>
                </StyledNavUlLi>
              ))}
            </StyledNavUl>
          </StyledNav>
        )}
      </StyledHeader>
    );
  }

  return (
    <StyledHeader sticky={sticky} {...props}>
      {children}
    </StyledHeader>
  );
}

Header.propTypes = {
  title: propTypes.string,
  sticky: propTypes.bool,
  logoSrc: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      href: propTypes.string.isRequired,
    }),
  ),
};

Header.defaultProps = {
  title: "",
  sticky: false,
  logoSrc: "",
  items: [],
};

export default Header;

function Logo({ logoSrc, children, ...props }) {
  return (
    <div {...props}>
      {logoSrc && logoSrc.length !== 0 && <StyledLogo src={logoSrc} />}
      {children}
    </div>
  );
}

Logo.propTypes = {
  logoSrc: propTypes.string,
};

Logo.defaultProps = {
  logoSrc: "",
};

Header.Logo = Logo;

function Title({ title, children, ...props }) {
  return (
    <div {...props}>
      {title && title.length !== 0 && (
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
      )}
      {children}
    </div>
  );
}

Title.propTypes = {
  title: propTypes.string,
};

Title.defaultProps = {
  title: "",
};

Header.Title = Title;

function Navigation({ items, children, ...props }) {
  return (
    <div {...props}>
      {items && items.length !== 0 && (
        <StyledNav>
          <StyledNavUl>
            {items &&
              items.map((item, index) => (
                <StyledNavUlLi key={`${index}_${item.name}`}>
                  <StyledNavA href={item.href}>{item.name}</StyledNavA>
                </StyledNavUlLi>
              ))}
          </StyledNavUl>
        </StyledNav>
      )}
      {children}
    </div>
  );
}

Navigation.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      href: propTypes.string.isRequired,
    }),
  ),
};

Navigation.defaultProps = {
  items: [],
};

Header.Navigation = Navigation;
