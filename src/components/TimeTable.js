// src/components/Timetable.js
import React, { useState } from 'react';
import './Timetable.css'; // Make sure to include the CSS file for styling

const Timetable = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = Array.from({ length: 24 }, (_, index) => index + 1);

  // Course codes to be randomly allocated
  const courseCodes = [
    '23CS06EF', '23CS2205A', '23SDCS11R', '23MT2004',
    '23EC2210R', '23AD2102R', '22UC0022'
  ];

  // Generate random timetable data
  const generateTimetableData = () => {
    const data = [];
    daysOfWeek.forEach(day => {
      const usedHours = new Set();
      while (usedHours.size < 8) {
        const hour = Math.floor(Math.random() * 24) + 1;
        if (!usedHours.has(hour)) {
          usedHours.add(hour);
          const roomLetter = ['R', 'L', 'C', 'F', 'E', 'S'][Math.floor(Math.random() * 6)];
          const roomNumber = `${Math.floor(Math.random() * 7)}${String(Math.floor(Math.random() * 25) + 1).padStart(2, '0')}`;
          const room = `${roomLetter}${roomNumber}`;
          const courseCode = courseCodes[Math.floor(Math.random() * courseCodes.length)];
          data.push({ day, hour, room, courseCode });
        }
      }
    });
    return data;
  };

  // Sample timetable data with course codes
  const timetableData = generateTimetableData();

  // State to keep track of the selected day
  const [selectedDay, setSelectedDay] = useState(null);

  // Function to handle day click
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Get details for the selected day
  const getDetailsForDay = (day) => {
    return timetableData
      .filter(data => data.day === day)
      .sort((a, b) => a.hour - b.hour); // Sort hours in ascending order
  };

  return (
    <div className="timetable-container">
      <table className="timetable">
        <thead>
          <tr>
            <th></th>
            {hours.map(hour => (
              <th key={hour}>{hour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map(day => (
            <tr key={day}>
              <td
                className="day-cell"
                onClick={() => handleDayClick(day)}
              >
                {day}
              </td>
              {hours.map(hour => {
                const item = timetableData.find(data => data.day === day && data.hour === hour);
                return (
                  <td key={hour} className={item ? item.color : ''}>
                    {item ? <span className="badge bg-primary rounded-pill">{hour}</span> : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDay && (
        <div className="hours-list">
          <h3 className="details-list">Details for {selectedDay}:</h3>
          <ul>
            {getDetailsForDay(selectedDay).map(({ hour, room, courseCode }) => (
              <li key={hour}>Hour {hour} - Room {room} - Course Code {courseCode}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Timetable;
