// Define constants for control commands
export type ControlOptions = "LEFT" | "RIGHT" | "FORWARD";

// Abstract Entity class
abstract class Entity {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    abstract Control(command: ControlOptions): void;
}


export default Entity;