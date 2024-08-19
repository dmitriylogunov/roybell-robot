import "./App.css";
import ControlsComponent from "./components/ControlsComponent";
import GridComponent from "./components/GridComponent";

function App() {
  return (
    <>
      <div className="header"></div>
      <div className="content">
        <ControlsComponent />
        <GridComponent />
      </div>
      <div className="legend"></div>
      <div className="footer"></div>
    </>
  );
}

export default App;
