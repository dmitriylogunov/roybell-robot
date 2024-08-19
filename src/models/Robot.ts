export type RobotDirectionOptions = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type RobotCommands = "LEFT" | "RIGHT" | "FORWARD" | "BACKWARD";

interface Robot {
  direction: RobotDirectionOptions;
  xCoordinate: number;
  yCoordinate: number;
}

export default Robot;
