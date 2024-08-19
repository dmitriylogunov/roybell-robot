import React, { useEffect } from "react";
import { RobotCommands } from "../models/Robot";
import { useDispatch } from "react-redux";
import { moveRobot } from "../redux/robotSlice";

const ControlsComponent: React.FC = () => {
  const dispatch = useDispatch();

  const handleCommand = (command: RobotCommands) => {
    dispatch(moveRobot(command));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "a":
        case "A":
          handleCommand("LEFT");
          break;
        case "d":
        case "D":
          handleCommand("RIGHT");
          break;
        case "w":
        case "W":
          handleCommand("FORWARD");
          break;
        case "s":
        case "S":
          handleCommand("BACK");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="controls">
      <button onClick={() => handleCommand("LEFT")}>Turn Left</button>
      <button onClick={() => handleCommand("RIGHT")}>Turn Right</button>
      <button onClick={() => handleCommand("FORWARD")}>Move Forward</button>
      <button onClick={() => handleCommand("BACK")}>Move Backward</button>
    </div>
  );
};

export default ControlsComponent;
