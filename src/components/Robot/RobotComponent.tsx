import React from 'react';
import './RobotComponent.css';
import Robot, { RobotDirectionOptions } from '../../classes/robot';

const RobotComponent: React.FC<{ robot: Robot }> = ({ robot }) => {
  const getRotationAngle = (direction: RobotDirectionOptions) => {
    switch (direction) {
      case 'UP':
        return '0deg';
      case 'RIGHT':
        return '90deg';
      case 'DOWN':
        return '180deg';
      case 'LEFT':
        return '270deg';
    }
  };

  const getFlip = (direction: RobotDirectionOptions) => {
    switch (direction) {
      case 'LEFT':
        return '-1'; // Flip horizontally
      default:
        return '1'; // No flip
    }
  };

  const rotationAngle = getRotationAngle(robot.direction);
  const flip = getFlip(robot.direction);

  return (
    <div className="robot-image" style={{ transform: `rotate(${rotationAngle}) scaleX(${flip})` }}></div>
  );
};

export default RobotComponent;