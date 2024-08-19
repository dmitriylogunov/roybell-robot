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
        case "ArrowLeft":
          handleCommand("LEFT");
          break;
        case "d":
        case "D":
        case "ArrowRight":
          handleCommand("RIGHT");
          break;
        case "w":
        case "W":
        case "ArrowUp":
          handleCommand("FORWARD");
          break;
        case "s":
        case "S":
        case "ArrowDown":
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
        <button
          className={"br_text-sm-sans-bold-spaced"}
          onClick={() => handleCommand("FORWARD")}
        >
          W
        </button>
      </div>
      <div>&nbsp;</div>
      <div>
        <button
          className={"br_text-sm-sans-bold-spaced"}
          onClick={() => handleCommand("LEFT")}
        >
          A
        </button>
      </div>
      <div>
        <button
          className={"br_text-sm-sans-bold-spaced"}
          onClick={() => handleCommand("BACK")}
        >
          S
        </button>
      </div>
      <div>
        <button
          className={"br_text-sm-sans-bold-spaced"}
          onClick={() => handleCommand("RIGHT")}
        >
          D
        </button>
      </div>
    </div>
  );
};

export default ControlsComponent;
