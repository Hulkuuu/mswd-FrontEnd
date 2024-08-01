import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';  // Adjust the import path as needed
import Course from './components/Courses';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Timetable from './components/TimeTable'; // Import the Timetable component
import Assignments from './components/Assignments'; // Import the Assignments component
import logo from './KL_University_logo.svg'; // Update with the actual path
import canteen from './Klu Canteen.jpeg'; // Update with the actual path
import Library from './klu Library.jpg'; // Update with the actual path
import Students from './klu Students.jpeg'; // Update with the actual path
import faculty from './klu Faculty.jpeg'; // Update with the actual path
import Sports from './KluSports.jpeg'; // Update with the actual path

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <img src={logo} alt="klbg" className="logotop" />
        <HeaderSwitch />
        <Routes>
          <Route path="/" element={
            <div className="image-row">
              <div className="image-item">
                <img src={canteen} alt="Canteen" className="logo" />
                <div className="image-text">Canteen</div>
              </div>
              <div className="image-item">
                <img src={Library} alt="Library" className="logo" />
                <div className="image-text">Library</div>
              </div>
              <div className="image-item">
                <img src={Students} alt="Students" className="logo" />
                <div className="image-text">Students</div>
              </div>
              <div className="image-item">
                <img src={faculty} alt="Faculty" className="logo" />
                <div className="image-text">Faculty</div>
              </div>
              <div className="image-item">
                <img src={Sports} alt="Sports" className="logo" />
                <div className="image-text">Sports</div>
              </div>
            </div>
          } />
          <Route path="/courses" element={<Course />} />
          <Route path="/students" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/timetable" element={<Timetable />} /> {/* Add the timetable route */}
          <Route path="/assignments" element={<Assignments />} /> {/* Add the assignments route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HeaderSwitch = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Header /> : null;
}

export default App;
