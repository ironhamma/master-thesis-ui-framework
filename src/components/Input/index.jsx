import { StyledInput, StyledLabel } from "./styles";

function Input({ value, onChange, type = "text", label = "", ...props }) {
  if (label.length > 0) {
    return (
      <div>
        <StyledLabel htmlFor={label.toLowerCase().trim().split(" ").join("_")}>
          {label}
        </StyledLabel>
        <StyledInput
          id={label.toLowerCase().trim().split(" ").join("_")}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }

  return (
    <StyledInput type={type} value={value} onChange={onChange} {...props} />
  );
}
export default Input;
