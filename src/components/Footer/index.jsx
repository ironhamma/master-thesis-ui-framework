import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import {
  StyledFooterCopyR,
  StyledFooter,
  StyledFooterA,
  StyledFooterLogo,
  StyledFooterNav,
  StyledFooterNavUl,
  StyledFooterNavUlLi,
  StyledFooterContainer,
  StyledSecondaryFooter,
  StyledFooterContactText,
  StyledFooterContactLink,
} from "./styles";

function Footer({ contact, logoSrc, items, copyRight, children, ...props }) {
  const subComponentList = Object.keys(Footer);
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
      <StyledFooterContainer>
        {contact && (
          <StyledSecondaryFooter>
            {contact.author && contact.author.length !== 0 && (
              <StyledFooterContactText>
                {contact.author}
              </StyledFooterContactText>
            )}
            {contact.address && contact.address.length !== 0 && (
              <StyledFooterContactText>
                {contact.address}
              </StyledFooterContactText>
            )}
            {contact.email && contact.email.length !== 0 && (
              <StyledFooterContactLink href={`mailto:${contact.email}`}>
                {contact.email}
              </StyledFooterContactLink>
            )}
            {contact.phone && contact.phone.length !== 0 && (
              <StyledFooterContactLink href={`tel:${contact.phone}`}>
                {contact.phone}
              </StyledFooterContactLink>
            )}
          </StyledSecondaryFooter>
        )}
        <StyledFooter {...props}>
          {logoSrc && logoSrc.length !== 0 && (
            <StyledFooterLogo src={logoSrc} />
          )}
          {copyRight && copyRight.length !== 0 && (
            <StyledFooterCopyR>{copyRight}</StyledFooterCopyR>
          )}
          {items && items.length !== 0 && (
            <StyledFooterNav>
              <StyledFooterNavUl>
                {items.map((item, index) => (
                  <StyledFooterNavUlLi key={`${index}_${item.name}`}>
                    <StyledFooterA href={item.href}>{item.name}</StyledFooterA>
                  </StyledFooterNavUlLi>
                ))}
              </StyledFooterNavUl>
            </StyledFooterNav>
          )}
        </StyledFooter>
      </StyledFooterContainer>
    );
  }

  return (
    <StyledFooterContainer modular {...props}>
      {children}
    </StyledFooterContainer>
  );
}

Footer.propTypes = {
  logoSrc: propTypes.string,
  copyRight: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      href: propTypes.string.isRequired,
    }),
  ),
  contact: propTypes.shape({
    author: propTypes.string,
    address: propTypes.string,
    email: propTypes.string,
    phone: propTypes.string,
  }),
};

Footer.defaultProps = {
  logoSrc: "",
  copyRight: "",
  items: [],
  contact: null,
};

export default Footer;

function Logo({ logoSrc, children, ...props }) {
  return (
    <div {...props}>
      {logoSrc && logoSrc.length !== 0 && <StyledFooterLogo src={logoSrc} />}
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

Footer.Logo = Logo;

function Navigation({ items, children, ...props }) {
  return (
    <div {...props}>
      {items && items.length !== 0 && (
        <StyledFooterNav>
          <StyledFooterNavUl>
            {items &&
              items.map((item, index) => (
                <StyledFooterNavUlLi key={`${index}_${item.name}`}>
                  <StyledFooterA href={item.href}>{item.name}</StyledFooterA>
                </StyledFooterNavUlLi>
              ))}
          </StyledFooterNavUl>
        </StyledFooterNav>
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

Footer.Navigation = Navigation;

function CopyRight({ copyRight, children, ...props }) {
  return (
    <div {...props}>
      {copyRight && copyRight.length !== 0 && (
        <StyledFooterCopyR>{copyRight}</StyledFooterCopyR>
      )}
      {children}
    </div>
  );
}

CopyRight.propTypes = {
  copyRight: propTypes.string,
};

CopyRight.defaultProps = {
  copyRight: "",
};

Footer.CopyRight = CopyRight;

function Secondary({ contact, children, ...props }) {
  return (
    <div {...props}>
      {contact && (
        <StyledSecondaryFooter>
          {contact.author && contact.author.length !== 0 && (
            <StyledFooterContactText>{contact.author}</StyledFooterContactText>
          )}
          {contact.address && contact.address.length !== 0 && (
            <StyledFooterContactText>{contact.address}</StyledFooterContactText>
          )}
          {contact.email && contact.email.length !== 0 && (
            <StyledFooterContactLink href={`mailto:${contact.email}`}>
              {contact.email}
            </StyledFooterContactLink>
          )}
          {contact.phone && contact.phone.length !== 0 && (
            <StyledFooterContactLink href={`tel:${contact.phone}`}>
              {contact.phone}
            </StyledFooterContactLink>
          )}
        </StyledSecondaryFooter>
      )}
      {children}
    </div>
  );
}

Secondary.propTypes = {
  contact: propTypes.shape({
    author: propTypes.string,
    address: propTypes.string,
    email: propTypes.string,
    phone: propTypes.string,
  }),
};

Secondary.defaultProps = {
  contact: null,
};

Footer.Secondary = Secondary;

function Primary({ children, ...props }) {
  return (
    <StyledFooter modular {...props}>
      {children}
    </StyledFooter>
  );
}

Primary.propTypes = {};

Primary.defaultProps = {};

Footer.Primary = Primary;
