import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Robot, { RobotCommands, RobotDirectionOptions } from "../models/Robot";

const initialState: Robot = {
  direction: "LEFT",
  xCoordinate: 2,
  yCoordinate: 2,
};

const robotSlice = createSlice({
  name: "robot",
  initialState,
  reducers: {
    moveRobot: (state, action: PayloadAction<RobotCommands>) => {
      switch (action.payload) {
        case "LEFT":
          state.direction = turnLeft(state.direction);
          break;
        case "RIGHT":
          state.direction = turnRight(state.direction);
          break;
        case "FORWARD":
          move(state, 1);
          break;
        case "BACKWARD":
          move(state, -1);
          break;
      }
    },
  },
});

const turnLeft = (direction: RobotDirectionOptions): RobotDirectionOptions => {
  switch (direction) {
    case "UP":
      return "LEFT";
    case "LEFT":
      return "DOWN";
    case "DOWN":
      return "RIGHT";
    case "RIGHT":
      return "UP";
  }
};

const turnRight = (direction: RobotDirectionOptions): RobotDirectionOptions => {
  switch (direction) {
    case "UP":
      return "RIGHT";
    case "RIGHT":
      return "DOWN";
    case "DOWN":
      return "LEFT";
    case "LEFT":
      return "UP";
  }
};

const move = (state: Robot, stepsCount: number) => {
  switch (state.direction) {
    case "UP":
      state.yCoordinate += stepsCount;
      break;
    case "DOWN":
      state.yCoordinate -= stepsCount;
      break;
    case "LEFT":
      state.xCoordinate -= stepsCount;
      break;
    case "RIGHT":
      state.xCoordinate += stepsCount;
      break;
  }
};

export const { moveRobot } = robotSlice.actions;
export default robotSlice.reducer;
