import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Robot, { RobotCommands, RobotDirectionOptions } from "../models/Robot";
import { GRID_SIZE } from "../App";

const initialState: Robot = {
  direction: "LEFT",
  xCoordinate: 2,
  yCoordinate: 2,
  angle: 0,
};

const robotSlice = createSlice({
  name: "robot",
  initialState,
  reducers: {
    moveRobot: (state, action: PayloadAction<RobotCommands>) => {
      switch (action.payload) {
        case "LEFT":
          state.direction = turnLeft(state.direction);
          state.angle -= 90;
          break;
        case "RIGHT":
          state.direction = turnRight(state.direction);
          state.angle += 90;
          break;
        case "FORWARD":
          move(state, 1);
          break;
        case "BACK":
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

const validateCoordinate = (coordinate: number) => {
  if (coordinate < 0) {
    return 0;
  } else if (coordinate >= GRID_SIZE) {
    return GRID_SIZE - 1;
  } else {
    return coordinate;
  }
};

const move = (state: Robot, stepsCount: number) => {
  switch (state.direction) {
    case "UP":
      state.yCoordinate = validateCoordinate(state.yCoordinate - stepsCount);
      break;
    case "DOWN":
      state.yCoordinate = validateCoordinate(state.yCoordinate + stepsCount);
      break;
    case "LEFT":
      state.xCoordinate = validateCoordinate(state.xCoordinate - stepsCount);
      break;
    case "RIGHT":
      state.xCoordinate = validateCoordinate(state.xCoordinate + stepsCount);
      break;
  }
};

export const { moveRobot } = robotSlice.actions;
export default robotSlice.reducer;
