import { StyledButton } from "./styles";

function Button({ children, onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
export default Button;
