import React from 'react';

const GridComponent: React.FC = () => {
    // Create an instance of the Grid class
    const grid = new Grid();

    // Get the data for the grid
    const gridData = grid.getData();

    return (
        <div>
            <h1>Grid Component</h1>
            <div className="grid">
                {gridData.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, columnIndex) => (
                            <div key={columnIndex} className="cell">
                                {cell.x === 2 && cell.y === 3 ? <Entity /> : null}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridComponent;