import React from 'react';

// Define the Entity type
interface Entity {
  type: string;
  // Add other properties as needed
}

// Define the components to be rendered based on the Entity type
const TypeAComponent: React.FC = () => <div>Type A Component</div>;
const TypeBComponent: React.FC = () => <div>Type B Component</div>;
const DefaultComponent: React.FC = () => <div>Default Component</div>;

// Define the EntityComponent
const EntityComponent: React.FC<{ entity: Entity }> = ({ entity }) => {
  const renderComponent = () => {
    switch (entity.type) {
      case 'Robot':
        return <RobotComponent robot={entity}/>;
      case 'typeB':
        return <TypeBComponent />;
      default:
        return <DefaultComponent />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default EntityComponent;