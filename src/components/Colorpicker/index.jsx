import { StyledColorPickerInput, StyledColorpickerLabel } from "./styles";

function Colorpicker({ label, value, onChange, ...props }) {
  if (label) {
    return (
      <StyledColorpickerLabel>
        {label}
        <StyledColorPickerInput
          type="color"
          value={value}
          onChange={onChange}
          {...props}
        />
      </StyledColorpickerLabel>
    );
  }

  return <input type="color" />;
}

export default Colorpicker;
