import React, { useMemo } from "react";
import Grid from "../../classes/grid";
import RobotComponent from "../Robot/RobotComponent";
import Robot from "../../classes/robot";
import "./GridComponent.css";

const GridComponent: React.FC<{}> = () => {
  const robot = useMemo(() => new Robot(2, 2, "LEFT"), []);

  // Create an instance of the Grid class
  const grid = useMemo(() => new Grid(5, 5, robot), []);

  // Get the data for the grid
  const gridData = grid.getData();

  return (
    <div className="grid br_border-grey-200">
      {gridData.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <div
            key={rowIndex + "." + columnIndex}
            className="cell br_border-grey-200"
          >
            {/* Simplified, since there are no other object types in the grid other than robot */}
            {cell ? <RobotComponent robot={cell as Robot} /> : null}
          </div>
        ))
      )}
    </div>
  );
};

export default GridComponent;
