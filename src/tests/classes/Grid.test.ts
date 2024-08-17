import { describe, it, expect, beforeEach } from "vitest";
import Grid from "../../classes/grid";
//import { ControlOptions } from "../../classes/entity";
import Robot from "../../classes/robot";

describe("Grid", () => {
  let robot: Robot;
  let grid: Grid;

  beforeEach(() => {
    robot = new Robot(0, 0, "RIGHT");
    grid = new Grid(3, 3, robot);
  });

  it("should initialize grid correctly", () => {
    const data = grid.getData();
    expect(data.length).toBe(3);
    expect(data[0].length).toBe(3);
    expect(data[0][0]).toBe(robot);
  });

  it("should return correct grid data", () => {
    const data = grid.getData();
    expect(data[0][0]).toBe(robot);
    expect(data[1][1]).toBeNull();
  });

  //   it("should control entity and update grid correctly", () => {
  //     const command: ControlOptions = "FORWARD"; // Assuming ControlOptions has a direction property
  //     grid.Control(robot, command);
  //     const data = grid.getData();
  //     expect(data[0][0]).toBeNull();
  //     expect(data[0][1]).toBe(robot); // Assuming entity moves to (0, 1) when command is 'right'
  //   });
});
