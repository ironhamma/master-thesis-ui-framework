import { styled } from "styled-components";

export const StyledTable = styled.table`
  background-color: ${({ theme, mode }) => theme.colors.primary.dark};
  color: ${({ theme, mode }) => theme.colors.primary.text};
  border-collapse: collapse;
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius.medium}px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;

export const StyledTableCaption = styled.caption`
  background-color: ${({ theme, mode }) => theme.colors.primary.dark};
  color: ${({ theme, mode }) => theme.colors.primary.text};
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
`;

export const StyledTableHead = styled.thead`
  background-color: ${({ theme, mode }) => theme.colors.primary.dark};
  color: ${({ theme, mode }) => theme.colors.primary.text};
`;

export const StyledTableRow = styled.tr`
  background-color: ${({ theme, mode }) => theme.colors.primary.light};
  color: ${({ theme, mode }) => theme.colors.primary.text};
`;

export const StyledTableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  border: 2px solid ${({ theme, mode }) => theme.colors.primary.dark};
  border-bottom: 6px solid ${({ theme, mode }) => theme.colors.primary.dark};
  font-weight: bold;
  text-align: left;
`;

export const StyledTableFooterHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  border: 2px solid ${({ theme, mode }) => theme.colors.primary.dark};
  border-bottom: 2px solid ${({ theme, mode }) => theme.colors.primary.dark};
  text-align: left;
`;

export const StyledTableData = styled.td`
  padding: ${({ theme }) => theme.spacing.padding.small}px;
  border: 2px solid ${({ theme, mode }) => theme.colors.primary.dark};
`;

export const StyledTableFoot = styled.tfoot`
  background-color: ${({ theme, mode }) => theme.colors.primary.dark};
  color: ${({ theme, mode }) => theme.colors.primary.text};
  border-top: 6px solid ${({ theme, mode }) => theme.colors.primary.dark};
`;

export const StyledTableBody = styled.tbody`
  background-color: ${({ theme, mode }) => theme.colors.primary.light};
  color: ${({ theme, mode }) => theme.colors.primary.text};
  border: 2px solid ${({ theme, mode }) => theme.colors.primary.dark};
`;
