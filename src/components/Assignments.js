import React, { useState } from 'react';
import './Assignments.css'; // Ensure the path is correct

const courses = [
  {
    id: 1, code: '23CS06EF', name: 'MERN STACK WEB DEVELOPMENT',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-01', completed: false },
      { type: 'HA', dueDate: '2024-08-15', completed: false },
      { type: 'ALM', dueDate: '2024-08-20', completed: false },
      { type: 'HA', dueDate: '2024-08-25', completed: false }
    ]
  },
  {
    id: 2, code: '23CS2205A', name: 'DESIGN AND ANALYSIS OF ALGORITHMS',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-05', completed: false },
      { type: 'HA', dueDate: '2024-08-12', completed: false },
      { type: 'ALM', dueDate: '2024-08-20', completed: false },
      { type: 'HA', dueDate: '2024-08-30', completed: false }
    ]
  },
  {
    id: 3, code: '23SDCS11R', name: 'LINUX ADMINISTRATION & AUTOMATION',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-10', completed: false },
      { type: 'HA', dueDate: '2024-08-20', completed: false },
      { type: 'ALM', dueDate: '2024-08-25', completed: false },
      { type: 'HA', dueDate: '2024-09-01', completed: false }
    ]
  },
  {
    id: 4, code: '23MT2004', name: 'MATHEMATICAL PROGRAMMING',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-12', completed: false },
      { type: 'HA', dueDate: '2024-08-18', completed: false },
      { type: 'ALM', dueDate: '2024-08-22', completed: false },
      { type: 'HA', dueDate: '2024-08-28', completed: false }
    ]
  },
  {
    id: 5, code: '23EC2210R', name: 'NETWORK PROTOCOLS AND SECURITY',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-18', completed: false },
      { type: 'HA', dueDate: '2024-08-25', completed: false },
      { type: 'ALM', dueDate: '2024-09-01', completed: false },
      { type: 'HA', dueDate: '2024-09-10', completed: false }
    ]
  },
  {
    id: 6, code: '23AD2102R', name: 'DATABASE MANAGEMENT SYSTEMS',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-20', completed: false },
      { type: 'HA', dueDate: '2024-08-28', completed: false },
      { type: 'ALM', dueDate: '2024-09-01', completed: false },
      { type: 'HA', dueDate: '2024-09-10', completed: false }
    ]
  },
  {
    id: 7, code: '22UC0022', name: 'SOCIAL IMMERSIVE LEARNING',
    assignments: [
      { type: 'ALM', dueDate: '2024-08-22', completed: false },
      { type: 'HA', dueDate: '2024-08-30', completed: false },
      { type: 'ALM', dueDate: '2024-09-05', completed: false },
      { type: 'HA', dueDate: '2024-09-15', completed: false }
    ]
  }
];
  

const calculateProgress = (assignments) => {
  if (assignments.length === 0) return 0;
  const completedAssignments = assignments.filter(a => a.completed).length;
  return (completedAssignments / assignments.length) * 100;
};

const Assignments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesPerPage = 4;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + coursesPerPage);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedCourse(null); // Reset selected course when changing page
  };

  return (
    <div className="assignments-container">
      <div className="course-list">
        {currentCourses.map(course => (
          <div key={course.id} className="course-item" onClick={() => handleCourseClick(course)}>
            <div className="course-name">{course.name}</div>
            <div className="course-code">({course.code})</div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-details">
          <h3>Assignments for {selectedCourse.name}</h3>
          <div className="course-details-container">
            <ul>
              {selectedCourse.assignments.map((assignment, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={assignment.completed}
                    onChange={() => {
                      const updatedAssignments = [...selectedCourse.assignments];
                      updatedAssignments[index].completed = !assignment.completed;
                      setSelectedCourse({ ...selectedCourse, assignments: updatedAssignments });
                    }}
                  />
                  <strong>Type:</strong> {assignment.type} | <strong>Due Date:</strong> {assignment.dueDate}
                  <br />
                  <strong>Status:</strong> {assignment.completed ? 'Completed' : 'Not Completed'}
                </li>
              ))}
            </ul>
            <div className="progress-bar-container">
              <strong>Completion Progress:</strong>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={calculateProgress(selectedCourse.assignments)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${calculateProgress(selectedCourse.assignments)}%` }}
                ></div>
              </div>
              <div className="progress-bar-text">
                {calculateProgress(selectedCourse.assignments).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</a>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Assignments;
