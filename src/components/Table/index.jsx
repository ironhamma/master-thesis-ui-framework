import {
  StyledTable,
  StyledTableBody,
  StyledTableCaption,
  StyledTableData,
  StyledTableFoot,
  StyledTableFooterHeader,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
} from "./styles";

function Table({ data = [], columns, caption, colgroups, footer }) {
  if (data.length === 0) {
    return null;
  }

  return (
    <StyledTable>
      {caption && <StyledTableCaption>{caption}</StyledTableCaption>}
      {colgroups && colgroups.length > 0 && (
        <colgroup>
          {colgroups.map((colgroup) => (
            <col span={colgroup} />
          ))}
        </colgroup>
      )}
      {columns && columns.length > 0 && (
        <StyledTableHead>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableHeader>{column}</StyledTableHeader>
            ))}
          </StyledTableRow>
        </StyledTableHead>
      )}
      <StyledTableBody>
        {data.map((item) => (
          <StyledTableRow>
            {Object.keys(item).map((dataKey) => (
              <StyledTableData>{item[dataKey]}</StyledTableData>
            ))}
          </StyledTableRow>
        ))}
      </StyledTableBody>
      {footer && footer.value && footer.label && (
        <StyledTableFoot>
          <StyledTableRow>
            <StyledTableFooterHeader colSpan={columns.length - 1}>
              {footer.label}
            </StyledTableFooterHeader>
            <StyledTableData>{footer.value}</StyledTableData>
          </StyledTableRow>
        </StyledTableFoot>
      )}
    </StyledTable>
  );
}

export default Table;
