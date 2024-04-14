import generateUniqueID from "../../helpers/generateID";

function Checkbox({ id, label, checked, onChange }) {
  const genId = id || generateUniqueID();

  if (!label) {
    return (
      <input id={genId} type="checkbox" checked={checked} onChange={onChange} />
    );
  }

  return (
    <label htmlFor={genId}>
      <input id={genId} type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

export default Checkbox;
