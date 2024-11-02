import React, { useState } from 'react';
import './Feedback.css'; // Make sure to create this CSS file

const Feedback = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    facultyName: '',
    teachingMethod: '',
    extraSuggestions: ''
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackList([...feedbackList, formData]);
    setFormData({
      courseName: '',
      facultyName: '',
      teachingMethod: '',
      extraSuggestions: ''
    });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Faculty Name:
          <input
            type="text"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
        Your Experience In Class:
          <input
            type="text"
            name="teachingMethod"
            value={formData.teachingMethod}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Extra Suggestions:
          <textarea
            name="extraSuggestions"
            value={formData.extraSuggestions}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {feedbackList.length > 0 && (
        <div className="feedback-list">
          <h3>Feedback List</h3>
          <table className="feedback-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Faculty Name</th>
                <th>Teaching Method</th>
                <th>Extra Suggestions</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.courseName}</td>
                  <td>{feedback.facultyName}</td>
                  <td>{feedback.teachingMethod}</td>
                  <td>{feedback.extraSuggestions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Feedback;
