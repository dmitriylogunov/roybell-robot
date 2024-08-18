import "./App.css";
import GridComponent from "./components/Grid/GridComponent";

function App() {
  return (
    <>
      <div className="header"></div>
      <div className="content">
        <GridComponent />
      </div>
      <div className="legend"></div>
      <div className="footer"></div>
    </>
  );
}

export default App;
