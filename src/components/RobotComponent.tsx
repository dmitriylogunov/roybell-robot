import React from "react";
import "./RobotComponent.scss";
import Robot from "../models/Robot";

interface RobotProps {
  robot: Robot;
}

const RobotComponent: React.FC<RobotProps> = ({ robot }) => {
  const rotationStyle = {
    transform: `rotate(${robot.angle}deg)`,
  };

  return (
    <div className="robot" style={rotationStyle}>
      <div className="robot-image"></div>
    </div>
  );
};

export default RobotComponent;
