import DataTable from "./components/DataTable/DataTable";
import HookStore from "./hooks/hookStore";
import DemoSite from "./site/DemoSite";

function App() {
  return (
    <HookStore>
      <div className="duckSite">
        <DemoSite />
      </div>
    </HookStore>
  );
}

export default App;
