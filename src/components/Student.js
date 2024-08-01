import React from 'react';

const Student = () => {
  const students = [
    { id: 2300033461, name: "K. Teja", branch: "CSE", year: 2 },
    { id: 2300032798, name: "M. Harshita", branch: "CSE", year: 2 },
    { id: 2300080088, name: "M. Satvik", branch: "AI&DS", year: 2 },
    { id: 2300031874, name: "N. Ushaswi", branch: "CSE", year: 2 },
    { id: 2300030696, name: "S. Ramanjan", branch: "CSE", year: 2 },
  ];

  return (
    <div className="students-grid">
      {students.map((student) => (
        <div className="student-item" key={student.id}>
          <div className="student-details">
            <h2>Student Name: {student.name}</h2>
            <h3>Student ID: {student.id}</h3>
            <h3>Branch: {student.branch}</h3>
            <h3>Year: {student.year}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Student;
