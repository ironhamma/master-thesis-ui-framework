import { styled } from "styled-components";

export const StyledDataTableContainer = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  background-color: ${({ theme }) => theme.colors.primary.main};
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.margin.medium}px auto;
`;

export const StyledDataTable = styled.div`
  width: 100%;
  overflow: auto;
`;

export const StyledDataTableHead = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledDataTableHeadRow = styled.div`
  display: flex;
  position: relative;

  ${({ sticky }) =>
    sticky &&
    `
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    display: -webkit-box;
  `}
`;

export const StyledDataTableHeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.primary.text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
  background-color: ${({ theme }) => theme.colors.primary.main};
  position: relative;
  height: 100%;
`;

export const StyledDataTableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  will-change: transform;
  position: relative;
`;

export const StyledDatatableRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  position: relative;
  transition: transform 0.2s;
`;

export const StyledDataTableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.dark};
  border-right: 1px solid ${({ theme }) => theme.colors.primary.dark};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary.text};
  font-family: ${({ theme }) => theme.typography.general.fontFamily};
`;

export const StyledDataTableGroupToggle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 10px;
  height: 100%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.primary.text};
`;

export const StyledDataTableRowHandle = styled.div`
  background-color: lightblue;
  width: 30px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -30px;
`;

export const StyledDataTableHeaderHandle = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StyledResizeable = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.primary.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.dark};
  position: relative;
`;
