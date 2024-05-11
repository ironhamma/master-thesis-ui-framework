import { StyledOption, StyledSelect } from "./styles";

const MOCK_DATA = [
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
];

const MOCK_DATA_GROUPED = [
  {
    label: "Option Group",
    options: [
      {
        id: 1,
        name: "Option 1",
      },
      {
        id: 2,
        name: "Option 2",
      },
    ],
  },
  {
    label: "Option Group 2",
    options: [
      {
        id: 3,
        name: "Option 3",
      },
    ],
  },
  {
    label: "Option Group 3",
    options: [
      {
        id: 1,
        name: "Option 4",
      },
      {
        id: 2,
        name: "Option 5",
      },
    ],
  },
  {
    label: "Option Group 4",
    options: [
      {
        id: 3,
        name: "Option 6",
      },
    ],
  },
];

function Select({ options, grouped = false, label = "" }) {
  if (grouped) {
    console.log("si si");
  } else {
    console.log("yes yes");
  }
  return (
    <>
      <label>{label}</label>
      <StyledSelect>
        {grouped
          ? options.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <StyledOption key={option.id} value={option.id}>
                    {option.name}
                  </StyledOption>
                ))}
              </optgroup>
            ))
          : options.map((option) => (
              <StyledOption key={option.id} value={option.id}>
                {option.name}
              </StyledOption>
            ))}
      </StyledSelect>
    </>
  );
}

export default Select;

// This should have datalist option as well, optgroup
