import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card/Card";
import DataTable from "../components/DataTable/DataTable";
import Heading from "../components/Heading/Heading";
import { generateMockTable } from "../components/generateMockTable";
import { useMessages } from "../hooks/useMessages";

const DemoSite = () => {
  const { addMessage } = useMessages();

  const { data: mockTableData, columns: mockTableColumns } = generateMockTable(
    100,
    100
  );

  const [featureFlags, setFeatureFlags] = useState({
    stickyHeader: false,
    headless: false,
    groupable: false,
    resizable: false,
    cellPopup: false,
    hasCheckboxes: false,
    sortable: false,
    valueChangeable: false,
    checkedCellStyle: false,
  });

  const add = () => {
    addMessage({ text: "Test message" });
  };

  const flipFlag = (name) => {
    const curr = { ...featureFlags };
    curr[name] = !curr[name];
    setFeatureFlags(curr);
  };

  return (
    <div>
      <Card className="mb-2">
        <Heading>Hello, welcome to my Diplomaterv Frontend Library!</Heading>
      </Card>
      <Card className="mb-2">
        <Heading className="mb-2">This is a Card with a button</Heading>
        <Button onClick={add}>Push me</Button>
      </Card>
      <Card className="mb-2">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <input
              type="checkbox"
              id="stickyHeader"
              value={featureFlags.stickyHeader}
              onChange={() => {
                flipFlag("stickyHeader");
              }}
            />
            <label htmlFor="stickyHeader">stickyHeader</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="headless"
              value={featureFlags.headless}
              onChange={() => {
                flipFlag("headless");
              }}
            />
            <label htmlFor="headless">headless</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="groupable"
              value={featureFlags.groupable}
              onChange={() => {
                flipFlag("groupable");
              }}
            />
            <label htmlFor="groupable">groupable</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="resizable"
              value={featureFlags.resizable}
              onChange={() => {
                flipFlag("resizable");
              }}
            />
            <label htmlFor="resizable">resizable</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cellPopup"
              value={featureFlags.cellPopup}
              onChange={() => {
                flipFlag("cellPopup");
              }}
            />
            <label htmlFor="cellPopup">cellPopup</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hasCheckboxes"
              value={featureFlags.hasCheckboxes}
              onChange={() => {
                flipFlag("hasCheckboxes");
              }}
            />
            <label htmlFor="hasCheckboxes">hasCheckboxes</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sortable"
              value={featureFlags.sortable}
              onChange={() => {
                flipFlag("sortable");
              }}
            />
            <label htmlFor="sortable">sortable</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="valueChangeable"
              value={featureFlags.valueChangeable}
              onChange={() => {
                flipFlag("valueChangeable");
              }}
            />
            <label htmlFor="valueChangeable">valueChangeable</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkedCellStyle"
              value={featureFlags.checkedCellStyle}
              onChange={() => {
                flipFlag("checkedCellStyle");
              }}
            />
            <label htmlFor="checkedCellStyle">checkedCellStyle</label>
          </div>
        </div>
      </Card>
      <Card width="full">
        <DataTable
          height={700}
          data={mockTableData}
          columns={mockTableColumns}
          stickyHeader={featureFlags.stickyHeader}
          headless={featureFlags.headless}
          groupable={featureFlags.groupable}
          resizable={featureFlags.resizable}
          cellPopup={featureFlags.cellPopup}
          hasCheckboxes={featureFlags.hasCheckboxes}
          sortable={featureFlags.sortable}
          valueChangeable={featureFlags.valueChangeable}
          checkedCellStyle={featureFlags.checkedCellStyle}
          rowHeight={100}
          colWidth={100}
        />
      </Card>
    </div>
  );
};

export default DemoSite;
