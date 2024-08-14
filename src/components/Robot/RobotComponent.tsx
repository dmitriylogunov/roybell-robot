import React from "react";
import "./RobotComponent.css";
import Robot, { RobotDirectionOptions } from "../../classes/robot";

interface RobotProps {
  robot: Robot;
}

const RobotComponent: React.FC<RobotProps> = ({ robot }) => {
  const getRotationAngle = (direction: RobotDirectionOptions) => {
    switch (direction) {
      case "UP":
        return "90deg";
      case "RIGHT":
        return "0deg";
      case "DOWN":
        return "260deg";
      case "LEFT":
        return "0deg";
    }
  };

  const getFlip = (direction: RobotDirectionOptions) => {
    switch (direction) {
      case "RIGHT":
        return "-1"; // Flip horizontally
      default:
        return "1"; // No flip
    }
  };

  const rotationAngle = getRotationAngle(robot.direction);
  const flip = getFlip(robot.direction);

  return (
    <div
      className="robot-image"
      style={{ transform: `rotate(${rotationAngle}) scaleX(${flip})` }}
    ></div>
  );
};

export default RobotComponent;
