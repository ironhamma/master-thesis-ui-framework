import { StyledTextarea } from "./styles";

function Textarea({
  value,
  onChange,
  rows = 20,
  cols = 20,
  resizeable = false,
  ...props
}) {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      {...props}
      rows={rows}
      cols={cols}
      style={{ resize: resizeable ? "both" : "none" }}
    />
  );
}

export default Textarea;
