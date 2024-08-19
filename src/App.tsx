import "./App.scss";
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
        <div className="controls-grid-container">
          <ControlsComponent />
          <div className="grid-wrapper">
            <GridComponent />
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;
