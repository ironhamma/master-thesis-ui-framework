import { styled } from "styled-components";
import { ORIENTATION } from "../../helpers/consts";

export const StyledAside = styled.aside`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  margin: ${({ theme }) => theme.spacing.margin.none}px;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  background-color: ${({ theme, mode }) => theme.colors[mode].light};
  color: ${({ theme, mode }) => theme.colors[mode].text};
  order: ${({ orientation }) => (orientation === ORIENTATION.LEFT ? -1 : 1)};
  max-width: 40%;
  ${({orientation}) => (orientation === ORIENTATION.RIGHT && 'margin-left: auto')};
`;
