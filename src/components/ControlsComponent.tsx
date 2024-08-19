import React from "react";
import { RobotCommands } from "../models/Robot";
import { useDispatch } from "react-redux";
import { moveRobot } from "../redux/robotSlice";

const ControlsComponent: React.FC = () => {
  const dispatch = useDispatch();

  const handleCommand = (command: RobotCommands) => {
    dispatch(moveRobot(command));
  };

  return (
    <div className="controls">
      <button onClick={() => handleCommand("LEFT")}>Turn Left</button>
      <button onClick={() => handleCommand("RIGHT")}>Turn Right</button>
      <button onClick={() => handleCommand("FORWARD")}>Move Forward</button>
      <button onClick={() => handleCommand("BACKWARD")}>Move Backward</button>
    </div>
  );
};

export default ControlsComponent;
