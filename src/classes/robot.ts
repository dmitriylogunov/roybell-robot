import Entity, { ControlOptions } from "./entity";

export type RobotDirectionOptions = "UP" | "DOWN" | "LEFT" | "RIGHT";

// Robot class extending Entity
class Robot extends Entity {
    public direction: RobotDirectionOptions;

    constructor(x: number, y: number, direction: RobotDirectionOptions) {
        super(x, y);
        this.direction = direction;
    }

    Control(command: ControlOptions): void {
        switch (command) {
            case "LEFT":
                // Implement logic for turning left
                break;
            case "RIGHT":
                // Implement logic for turning right
                break;
            case "FORWARD":
                // Implement logic for moving forward
                break;
            default:
                throw new Error("Invalid command");
        }
    }
}

export default Robot;