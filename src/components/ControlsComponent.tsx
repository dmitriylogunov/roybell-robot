import React, { useEffect } from "react";
import { RobotCommands } from "../models/Robot";
import { useDispatch } from "react-redux";
import { moveRobot } from "../redux/robotSlice";
import "./ControlsComponent.scss";

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
      <div>&nbsp;</div>
      <div>
        <button onClick={() => handleCommand("FORWARD")}>W</button>
      </div>
      <div>&nbsp;</div>
      <div>
        <button onClick={() => handleCommand("LEFT")}>A</button>
      </div>
      <div>
        <button onClick={() => handleCommand("BACK")}>S</button>
      </div>
      <div>
        <button onClick={() => handleCommand("RIGHT")}>D</button>
      </div>
    </div>
  );
};

export default ControlsComponent;
