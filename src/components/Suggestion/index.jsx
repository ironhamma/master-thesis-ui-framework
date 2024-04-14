import propTypes from "prop-types";
import {
  THEME_COLOR_MODES,
  THEME_COLOR_MODES_LIST,
} from "../../helpers/consts";
import generateUniqueID from "../../helpers/generateID";

import {
  StyledSuggestionContainer,
  StyledSuggestionDatalist,
  StyledSuggestionInput,
  StyledSuggestionLabel,
  StyledSuggestionOption,
} from "./styles";

function Suggestion({ suggestions, value, onChange, label, mode }) {
  // this is a datalist input
  const suggId = generateUniqueID();
  return (
    <StyledSuggestionContainer>
      <StyledSuggestionLabel htmlFor="suggestion" mode={mode}>
        {label}
      </StyledSuggestionLabel>
      <StyledSuggestionInput
        list={suggId}
        value={value}
        onChange={onChange}
        name="suggestion"
        id="suggestion"
        type="text"
      />
      <StyledSuggestionDatalist id={suggId}>
        {suggestions.map((suggestion) => (
          <StyledSuggestionOption value={suggestion} key={suggestion} />
        ))}
      </StyledSuggestionDatalist>
    </StyledSuggestionContainer>
  );
}

export default Suggestion;

Suggestion.propTypes = {
  label: propTypes.string,
  mode: propTypes.oneOf(THEME_COLOR_MODES_LIST),
  suggestions: propTypes.arrayOf(propTypes.string),
  value: propTypes.string,
};

Suggestion.defaultProps = {
  label: "",
  mode: THEME_COLOR_MODES.PRIMARY,
  suggestions: [],
  value: "",
};
