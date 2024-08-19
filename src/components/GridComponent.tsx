import React from "react";
import RobotComponent from "./RobotComponent";
import "./GridComponent.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const GridComponent: React.FC<{}> = () => {
  const robot = useSelector((state: RootState) => state.robot);

  return (
    <div className="grid br_border-grey-200">
      {Array.from({ length: 5 }).map((_, rowIndex) =>
        Array.from({ length: 5 }).map((_, columnIndex) => (
          <div
            key={rowIndex + "-" + columnIndex}
            className="cell br_border-grey-200"
          >
            {robot.xCoordinate === columnIndex &&
            robot.yCoordinate === rowIndex ? (
              <RobotComponent robot={robot} />
            ) : null}
          </div>
        ))
      )}
    </div>
  );
};

export default GridComponent;
