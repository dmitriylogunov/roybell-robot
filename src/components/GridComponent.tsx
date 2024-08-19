import React, { useMemo } from "react";
import "./GridComponent.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { GRID_SIZE } from "../App";
import RobotOverlayComponent from "./RobotOverlayComponent";

const GridComponent: React.FC<{}> = () => {
  const robot = useSelector((state: RootState) => state.robot);

  return (
    <div
      className="grid br_border-grey-200"
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
    >
      <RobotOverlayComponent robot={robot} />
      {Array.from({ length: GRID_SIZE }).map((_, rowIndex) =>
        Array.from({ length: GRID_SIZE }).map((_, columnIndex) => (
          <div
            key={rowIndex + "-" + columnIndex}
            className="cell br_border-grey-200"
          >
            {/* {robot.xCoordinate === columnIndex && robot.yCoordinate === rowIndex
              ? robotComponent
              : null} */}
          </div>
        ))
      )}
    </div>
  );
};

export default GridComponent;
