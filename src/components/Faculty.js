import React from 'react';

const facultyData = [
  {
    name: 'Dr. V. Murali Mohan',
    designation: 'Course CC of MSWD',
    department: 'CSE',
  },
  {
    name: 'P. Gayatri',
    designation: 'Assistant Professor',
    department: 'CSE',
  },
  {
    name: 'D. Suresh Kumar',
    designation: 'Assistant Professor',
    department: 'CSE',
  },
 
];

const Faculty = () => {
  return (
    <div className="faculty-grid">
      {facultyData.map((faculty, index) => (
        <div className="faculty-item" key={index}>
          <div className="faculty-details">
            <h1>Faculty name: {faculty.name}</h1>
            <h3>Designation: {faculty.designation}</h3>
            <h3>Department: {faculty.department}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faculty;