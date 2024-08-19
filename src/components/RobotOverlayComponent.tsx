import React, { useEffect, useState } from "react";
import Robot from "../models/Robot";
import "./RobotOverlayComponent.scss";
import RobotComponent from "./RobotComponent";
import { GRID_SIZE } from "../App";

interface RobotOverlayComponentProps {
  robot: Robot;
}

const RobotOverlayComponent: React.FC<RobotOverlayComponentProps> = ({
  robot,
}) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  });

  useEffect(() => {
    const parentElement =
      document.querySelector(".robot-overlay")?.parentElement;
    if (parentElement) {
      const parentHeight = parentElement.clientHeight;
      const parentWidth = parentElement.clientWidth;
      const width = (parentWidth / GRID_SIZE) | 0;
      const height = (parentHeight / GRID_SIZE) | 0;
      const top = (robot.yCoordinate * parentHeight) / GRID_SIZE;
      const left = (robot.xCoordinate * parentWidth) / GRID_SIZE;
      setPosition({ top, left, width, height });
    }
  }, [robot.xCoordinate, robot.yCoordinate]);

  return (
    <div className="robot-overlay">
      <div
        className="robot_wrapper"
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${position.width}px`,
          height: `${position.height}px`,
        }}
      >
        <RobotComponent robot={robot} />
      </div>
    </div>
  );
};

export default RobotOverlayComponent;
