import { StyledFlex } from "./styles";

function Flex({ children, direction = "row", ...props }) {
  return (
    <StyledFlex direction={direction} {...props}>
      {children}
    </StyledFlex>
  );
}

export default Flex;
