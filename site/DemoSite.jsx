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
        <Form>
          <Input label="Name" placeholder="John Doe" />
        </Form>
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
