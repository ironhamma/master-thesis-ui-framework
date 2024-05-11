import { useState, React } from "react";
import DataTable from "../src/components/DataTable";
import Heading from "../src/components/Heading";
import { generateMockTable } from "../src/components/generateMockTable";
import { useTheme } from "../src/hooks/useTheme";
import Article from "../src/components/Article";
import Aside from "../src/components/Aside";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
import Hero from "../src/components/Hero";
import Form from "../src/components/Form";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Select from "../src/components/Select";
import Output from "../src/components/Output";
import Textarea from "../src/components/Textarea";
import Progress from "../src/components/Progess";
import Fieldset from "../src/components/Fieldset";
import Checkbox from "../src/components/Checkbox";
import Suggestion from "../src/components/Suggestion";
import Colorpicker from "../src/components/Colorpicker";
import Flex from "../src/components/Flex";
import Table from "../src/components/Table";

const MOCK_TABLE_DATA = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    gender: "male",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 28,
    gender: "female",
  },
  {
    id: 3,
    name: "John Smith",
    age: 45,
    gender: "male",
  },
  {
    id: 4,
    name: "Jane Smith",
    age: 34,
    gender: "female",
  },
];

const MOCK_TABLE_DATA2 = [
  {
    id: 1,
    city: "Budapest",
    country: "Hungary",
    population: "2 000 000",
  },
  {
    id: 2,
    city: "Berlin",
    country: "Germany",
    population: "3 640 000",
  },
  {
    id: 3,
    city: "London",
    country: "United Kingdom",
    population: "8 980 000",
  },
  {
    id: 4,
    city: "Lisbon",
    country: "Portugal",
    population: "504 000",
  },
];

function DemoSite() {
  const { toggleMode, theme } = useTheme();

  const { data: mockTableData, columns: mockTableColumns } = generateMockTable(
    100,
    100,
    false,
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
    reorderable: false,
  });

  const flipFlag = (name) => {
    const curr = { ...featureFlags };
    curr[name] = !curr[name];
    setFeatureFlags(curr);
  };

  return (
    <div>
      <Header sticky>
        <Header.Title title="Front-end UI lib" />
        <Header.Logo logoSrc="/react.svg" />
        <Header.Navigation
          items={[
            { name: "Link", href: "#" },
            { name: "Link", href: "#" },
            { name: "Link", href: "#" },
          ]}
          style={{ marginLeft: "auto" }}
        />
        <Header.Title title="Another Text" />
      </Header>
      <Hero image="bg.jpg" onClick={() => toggleMode()}>
        <Heading type="h1" color="#fff">
          Dipterv Front-end UI Library
        </Heading>
        <Heading type="h3" color="#fff">
          This will be my thesis!
        </Heading>
      </Hero>
      <Section title="Headings">
        <Heading type="h1">
          H1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Heading type="h2">
          H2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Heading type="h3">
          H3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Heading type="h4">
          H4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Heading type="h5">
          H5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Heading type="h6">
          H6 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
      </Section>
      <Section title="Forms">
        <Flex>
          <Form>
            <Fieldset legend="Feature Flags">
              <Checkbox
                label="Headless"
                checked={featureFlags.headless}
                onChange={() => {
                  flipFlag("headless");
                }}
              />
              <Checkbox
                label="Sticky Header"
                checked={featureFlags.stickyHeader}
                onChange={() => {
                  flipFlag("stickyHeader");
                }}
              />
            </Fieldset>
            <Fieldset legend="Inputs">
              <Input label="Forname" placeholder="John" />
              <Input label="Surname" placeholder="Doe" />
              <Input label="Title" placeholder="Mr." />
              <Input label="Gender" placeholder="male" />
            </Fieldset>
          </Form>
          <Form>
            <Input label="Name" placeholder="John Doe" />
            <Colorpicker label="Pick a color" />
            <Input label="Time" type="time" />
            <Input label="Date" type="date" />
            <Input label="Password" type="password" />
            <Suggestion
              suggestions={["Option 1", "Option 2", "Option 3"]}
              label="Input with suggestions"
            />
            {/* <Select
              label="Select"
              options={["Option 1", "Option 2", "Option 3"]}
              grouped
            />
            <Select
              label="Select"
              options={["Option 1", "Option 2", "Option 3"]}
            /> */}
            <Button>Submit</Button>
          </Form>
          <Form>
            <Textarea
              value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dolorum atque doloribus repellendus omnis facere officia. Temporibus
            ex laborum, culpa vitae eum dolores ducimus, esse impedit, nulla
            ratione natus quo!"
            />
          </Form>
        </Flex>
        <Flex>
          <Form>
            <Input label="Username" placeholder="Enter username" />
            <Input label="Email" placeholder="Enter email" type="email" />
            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
            />
            <Flex style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>Submit</Button>
              <Button style={{ width: "100%" }}>Reset</Button>
            </Flex>
          </Form>
          <Form>
            <Suggestion
              suggestions={[
                "Portugal",
                "Italy",
                "Croatia",
                "Germany",
                "United Kingdom",
              ]}
              label="Country"
            />
            <Flex style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>Submit</Button>
              <Button style={{ width: "100%" }}>Reset</Button>
            </Flex>
          </Form>
          <Form>
            {/* <Select
              label="Department"
              options={[
                {
                  name: "Automatizálási és Alkalmazott Informatikai Tanszék",
                  id: 1,
                },
                { name: "Elektronikai Technológia Tanszék", id: 1 },
                { name: "Elektronikus Eszközök Tanszéke", id: 1 },
                {
                  name: "Hálózati Rendszerek és Szolgáltatások Tanszék",
                  id: 1,
                },
                { name: "Irányítástechnika és Informatika Tanszék", id: 1 },
                {
                  name: "Méréstechnika és Információs Rendszerek Tanszék",
                  id: 1,
                },
                {
                  name: "Számítástudományi és Információelméleti Tanszék",
                  id: 1,
                },
                {
                  name: "Szélessávú Hírközlés és Villamosságtan Tanszék",
                  id: 1,
                },
                { name: "Távközlési és Médiainformatikai Tanszék", id: 1 },
                { name: "Villamos Energetika Tanszék", id: 1 },
              ]}
            /> */}
            <Select
              label="Department"
              grouped
              options={[
                {
                  label: "VIK",
                  options: [
                    {
                      name: "Automatizálási és Alkalmazott Informatikai Tanszék",
                      id: 1,
                    },
                    { name: "Elektronikai Technológia Tanszék", id: 1 },
                    { name: "Elektronikus Eszközök Tanszéke", id: 1 },
                    {
                      name: "Hálózati Rendszerek és Szolgáltatások Tanszék",
                      id: 1,
                    },
                    { name: "Irányítástechnika és Informatika Tanszék", id: 1 },
                    {
                      name: "Méréstechnika és Információs Rendszerek Tanszék",
                      id: 1,
                    },
                    {
                      name: "Számítástudományi és Információelméleti Tanszék",
                      id: 1,
                    },
                    {
                      name: "Szélessávú Hírközlés és Villamosságtan Tanszék",
                      id: 1,
                    },
                    { name: "Távközlési és Médiainformatikai Tanszék", id: 1 },
                    { name: "Villamos Energetika Tanszék", id: 1 },
                  ],
                },
                {
                  label: "VBK",
                  options: [
                    {
                      name: "Alkalmazott Biotechnológia és Élelmiszertudományi Tanszék",
                      id: 1,
                    },
                    { name: "Fizikai Kémia és Anyagtudományi Tanszék", id: 1 },
                    {
                      name: "Kémiai és Környezeti Folyamatmérnöki Tanszék",
                      id: 1,
                    },
                    { name: "Szerves Kémia és Technológia Tanszék", id: 1 },
                    { name: "Szervetlen és Analitikai Kémia Tanszék", id: 1 },
                  ],
                },
              ]}
            />
            <Input label="Name" placeholder="Enter name" />
            <Input label="Name" placeholder="Enter name" />
            <Input label="Room number" placeholder="Room number" />
            <Input label="Room number" placeholder="Room number" />
            <Flex style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>Submit</Button>
              <Button style={{ width: "100%" }}>Reset</Button>
            </Flex>
          </Form>
        </Flex>
        <Flex>
          <Form>
            <Suggestion
              suggestions={[
                "Portugal",
                "Italy",
                "Croatia",
                "Germany",
                "United Kingdom",
              ]}
              label="Country"
            />
            <Flex style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>Submit</Button>
              <Button style={{ width: "100%" }}>Reset</Button>
            </Flex>
          </Form>
          <Form>
            <Suggestion
              suggestions={[
                "Portugal",
                "Italy",
                "Croatia",
                "Germany",
                "United Kingdom",
              ]}
              label="Country"
            />
            <Flex style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>Submit</Button>
              <Button style={{ width: "100%" }}>Reset</Button>
            </Flex>
          </Form>
          <Form>
            <Suggestion
              suggestions={[
                "Portugal",
                "Italy",
                "Croatia",
                "Germany",
                "United Kingdom",
              ]}
              label="Country"
            />
            <Flex style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>Submit</Button>
              <Button style={{ width: "100%" }}>Reset</Button>
            </Flex>
          </Form>
        </Flex>
        <Form>
          <Output>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dolorum atque doloribus repellendus omnis facere officia. Temporibus
            ex laborum, culpa vitae eum dolores ducimus, esse impedit, nulla
            ratione natus quo!
          </Output>

          <Progress />
          <Progress
            max={100}
            low={20}
            high={80}
            optimum={60}
            value={75}
            height={30}
          />
        </Form>
      </Section>
      <Section title="Table">
        <Table
          data={MOCK_TABLE_DATA}
          columns={["Id", "Name", "Age", "Gender"]}
          caption="Mock Table"
          colgroups={[2, 1]}
          footer={{ value: MOCK_TABLE_DATA.length, label: "Total" }}
        />
      </Section>
      <Section title="">
        <Table
          data={MOCK_TABLE_DATA2}
          columns={["Id", "City", "Country", "Population"]}
        />
      </Section>
      <Section title="Articles">
        <Article>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          officiis cum quas, consequatur modi maxime aspernatur eaque magnam
          odio totam deserunt aut id harum dolore sapiente ex similique,
          corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
          reiciendis possimus beatae. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque officiis cum quas, consequatur modi
          maxime aspernatur eaque magnam odio totam deserunt aut id harum dolore
          sapiente ex similique, corrupti esse eligendi! Impedit tempora non
          consequuntur tenetur quo reiciendis possimus beatae. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Doloremque officiis cum
          quas, consequatur modi maxime aspernatur eaque magnam odio totam
          deserunt aut id harum dolore sapiente ex similique, corrupti esse
          eligendi! Impedit tempora non consequuntur tenetur quo reiciendis
          possimus beatae.
        </Article>
        <Article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            officiis cum quas, consequatur modi maxime aspernatur eaque magnam
            odio totam deserunt aut id harum dolore sapiente ex similique,
            corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
            reiciendis possimus beatae. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Doloremque officiis cum quas, consequatur modi
            maxime aspernatur eaque magnam odio totam deserunt aut id harum
            dolore sapiente ex similique, corrupti esse eligendi! Impedit
            tempora non consequuntur tenetur quo reiciendis possimus beatae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            officiis cum quas, consequatur modi maxime aspernatur eaque magnam
            odio totam deserunt aut id harum dolore sapiente ex similique,
            corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
            reiciendis possimus beatae.
          </p>
          <Aside>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            officiis cum quas, consequatur modi maxime aspernatur eaque magnam
            odio totam deserunt aut id harum dolore sapiente ex similique,
            corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
            reiciendis possimus beatae.
          </Aside>
        </Article>
        <Article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            officiis cum quas, consequatur modi maxime aspernatur eaque magnam
            odio totam deserunt aut id harum dolore sapiente ex similique,
            corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
            reiciendis possimus beatae. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Doloremque officiis cum quas, consequatur modi
            maxime aspernatur eaque magnam odio totam deserunt aut id harum
            dolore sapiente ex similique, corrupti esse eligendi! Impedit
            tempora non consequuntur tenetur quo reiciendis possimus beatae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            officiis cum quas, consequatur modi maxime aspernatur eaque magnam
            odio totam deserunt aut id harum dolore sapiente ex similique,
            corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
            reiciendis possimus beatae.
          </p>
          <Aside orientation="left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            officiis cum quas, consequatur modi maxime aspernatur eaque magnam
            odio totam deserunt aut id harum dolore sapiente ex similique,
            corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
            reiciendis possimus beatae.
          </Aside>
        </Article>
      </Section>
      <Section title="Data Table">
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
          reorderable={featureFlags.reorderable}
        />
      </Section>
      <Footer
        logoSrc="/react.svg"
        items={[
          { name: "Link", href: "#" },
          { name: "Link", href: "#" },
          { name: "Link", href: "#" },
        ]}
        copyRight="Example.inc ©"
        contact={{
          author: "John Doe",
          address: "Street 1, City, Country",
          email: "example@example.com",
          phone: "+36 123-4567",
        }}
      />
    </div>
  );
}

export default DemoSite;
