import "./App.css";
import ControlsComponent from "./components/ControlsComponent";
import GridComponent from "./components/GridComponent";

export const GRID_SIZE = 5;
export const INITIAL_ROBOT_X = 2;
export const INITIAL_ROBOT_Y = 2;

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
