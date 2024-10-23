import React from 'react';
import './EmpleoyeeSection.css';

const EmpleoyeeSection = ({ employees }) => {
  return (
    <div className="employee-section">
      {employees.map((employee, index) => (
        <div className="employee-card" key={index}>
          <div className="profile-circle"></div>
          <h3>{employee.name}</h3>
          <p>{employee.position}</p>
          <span>{employee.timeWorked}</span>
        </div>
      ))}
    </div>
  );
};

export default EmpleoyeeSection;
