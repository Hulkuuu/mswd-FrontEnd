import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';
import FloatingActionButtons from './FloatingActionButtons'; // Ensure this path is correct
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const TimeTable = () => {
  // Sample data for the time table
  const timeTableData = [
    { day: 'Monday', hours: '3-4', course: 'DBMA', room: 'C108', LTPS: 'L' },
    { day: 'Monday', hours: '5-6', course: 'MP', room: 'R202', LTPS: 'L' },
    { day: 'Monday', hours: '8-9', course: 'MSWD', room: 'C017', LTPS: 'P' },
    { day: 'Tuesday', hours: '3-4', course: 'LAA', room: 'C421', LTPS: 'S' },
    { day: 'Tuesday', hours: '5-6', course: 'DAA', room: 'C309', LTPS: 'L' },
    { day: 'Tuesday', hours: '8-9', course: 'DBMS', room: 'M121', LTPS: 'S' },
    { day: 'Wednesday', hours: '3-4', course: 'MP', room: 'C109', LTPS: 'T' },
    { day: 'Wednesday', hours: '5-6', course: 'NPS', room: 'R302', LTPS: 'L' },
    { day: 'Wednesday', hours: '8-9', course: 'LAA', room: 'C109', LTPS: 'P' },
    { day: 'Thursday', hours: '3-4', course: 'MSWD', room: 'C011', LTPS: 'S' },
    { day: 'Thursday', hours: '5-6', course: 'LAA', room: 'C109', LTPS: 'P' },
    { day: 'Thursday', hours: '8-9', course: 'DAA', room: 'C018', LTPS: 'P' },
    { day: 'Friday', hours: '3-4', course: 'MSWD', room: 'C406', LTPS: 'S' },
    { day: 'Friday', hours: '5-6', course: 'LAA', room: 'C211', LTPS: 'S' },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    type: '', // Filter type (day, course, or LTPS)
    value: '' // Filter value
  });

  // State for loading
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  // State for navigation
  const [currentIndex, setCurrentIndex] = useState(0);

  // Event handler for changing filter type
  const handleTypeChange = (event) => {
    setFilters({
      type: event.target.value,
      value: '' // Reset value when filter type changes
    });
  };

  // Event handler for changing filter value
  const handleValueChange = (event) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      value: event.target.value
    }));
    setTyping(true); // Show Skeleton while typing
  };

  // Event handler for pressing Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setTyping(false); // Hide Skeleton
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds delay
    }
  };

  // Filtering the time table data based on the selected filter
  const filteredTimeTable = timeTableData.filter(item =>
    (filters.type === '' || filters.value === '' || item[filters.type]?.toLowerCase().includes(filters.value.toLowerCase()))
  );

  // Navigate to the next item
  const handleNavigate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTimeTable.length);
  };

  return (
    <Card sx={{ width: '100%', marginTop: '20px' }}>
      <CardHeader
        title="Time Table"
        subheader="Filter and view your schedule"
        sx={{ backgroundColor: '#f5f5f5' }}
      />
      <CardContent>
        <Box sx={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: 'black' }}>
          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel id="filter-type-label" sx={{ fontSize: '1.25rem', marginTop: '10px' }}>Filter By</InputLabel>
            <Select
              labelId="filter-type-label"
              value={filters.type}
              onChange={handleTypeChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Filter Type' }}
              sx={{ fontSize: '1.25rem' }}
            >
              <MenuItem value="" disabled>Select filter type</MenuItem>
              <MenuItem value="day">Day</MenuItem>
              <MenuItem value="course">Course</MenuItem>
              <MenuItem value="LTPS">LTPS</MenuItem>
            </Select>
          </FormControl>

          {typing || loading ? (
            <>
              <input
                type="text"
                placeholder={`Enter ${filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}`}
                value={filters.value}
                onChange={handleValueChange}
                onKeyDown={handleKeyDown}
                style={{ padding: '10px', width: '100%', marginBottom: '20px', boxSizing: 'border-box' }}
              />
              {typing && (
                <Box sx={{ width: '100%' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="rectangular" width={300} height={118} sx={{ marginTop: '10px' }} />
                  <Skeleton variant="rectangular" width={300} height={118} sx={{ marginTop: '10px' }} />
                </Box>
              )}
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder={`Enter ${filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}`}
                value={filters.value}
                onChange={handleValueChange}
                onKeyDown={handleKeyDown}
                style={{ padding: '10px', width: '100%', marginBottom: '20px', boxSizing: 'border-box' }}
              />

              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Day</th>
                    <th style={tableHeaderStyle}>Hours</th>
                    <th style={tableHeaderStyle}>Course</th>
                    <th style={tableHeaderStyle}>Room</th>
                    <th style={tableHeaderStyle}>LTPS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTimeTable.length > 0 ? (
                    filteredTimeTable.map((row, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: index === currentIndex ? '#e0f7fa' : 'transparent', // Highlight current row
                          cursor: 'pointer'
                        }}
                      >
                        <td style={tableCellStyle}>{row.day}</td>
                        <td style={tableCellStyle}>{row.hours}</td>
                        <td style={tableCellStyle}>{row.course}</td>
                        <td style={tableCellStyle}>{row.room}</td>
                        <td style={tableCellStyle}>{row.LTPS}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} style={{ ...tableCellStyle, textAlign: 'center' }}>
                        No data available for these filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <FloatingActionButtons onNavigate={handleNavigate} />
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  border: '1px solid #ddd',
  textAlign: 'left'
};

const tableCellStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  textAlign: 'left'
};

export default TimeTable;