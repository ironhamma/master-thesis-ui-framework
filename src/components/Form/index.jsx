import { StyledForm } from "./styles";

function Form({ children, props }) {
  return <StyledForm {...props}>{children}</StyledForm>;
}

export default Form;
