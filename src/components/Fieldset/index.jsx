import { StyledFieldSet } from "./styles";

function Fieldset({ children, legend }) {
  if (legend) {
    return (
      <StyledFieldSet>
        <legend>{legend}</legend>
        {children}
      </StyledFieldSet>
    );
  }

  return <StyledFieldSet>{children}</StyledFieldSet>;
}

export default Fieldset;
