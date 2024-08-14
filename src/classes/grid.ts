import Entity, { ControlOptions } from "./entity";

class Grid {
    sizeX: number;
    sizeY: number;
    private data: (Entity | null)[][];
    
    constructor(sizeX: number, sizeY: number, entity: Entity) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        
        const newGridData: (Entity | null)[][] = Array.from({ length: this.sizeX }, () => Array(this.sizeY).fill(null));
        newGridData[entity.x][entity.y] = entity;

        this.data = newGridData;
    }

    public getData(): (Entity | null)[][] {
        return this.data;
    }

    public Control(entity: Entity, command: ControlOptions): void {
        this.data[entity.x][entity.y] = null;
        entity.Control(command);
        this.data[entity.x][entity.y] = entity;
    }
}

export default Grid;