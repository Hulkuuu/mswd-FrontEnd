import React from 'react';

const facultyData = [
  {
    name: 'Dr. V. Murali Mohan',
    course : 'MSWD',
    Feedback: 'good',
  },
  {
    name: 'P. Gayatri',
    course : 'ctod',
    Feedback: 'good',
  },
  {
    name: 'D. Suresh Kumar',
    course : 'aoop',
    Feedback: 'good',
  },
 
];

const Feedback = () => {
  return (
    <div className="faculty-grid">
      {facultyData.map((faculty, index) => (
        <div className="faculty-item" key={index}>
          <div className="faculty-details">
            <h1>Faculty name: {faculty.name}</h1>
            <h3>Course: {faculty.course}</h3>
            <h3>Feedback    : {faculty.Feedback}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feedback;