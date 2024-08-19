export type RobotDirectionOptions = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type RobotCommands = "LEFT" | "RIGHT" | "FORWARD" | "BACK";

interface Robot {
  direction: RobotDirectionOptions;
  xCoordinate: number;
  yCoordinate: number;
  angle: number;
}

export default Robot;
