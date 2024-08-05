import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './kllogo.svg'; // Update the path to your logo image

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Example list of components (replace with actual data if needed)
  const components = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Students', path: '/students' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'TimeTable', path: '/TimeTable' },
    { name: 'Assignments', path: '/Assignments' },
    { name: 'Action', path: '/action' },
    { name: 'Another action', path: '/another-action' },
    { name: 'Something else here', path: '/something-else' },
    { name: 'Separated link', path: '/separated-link' }
  ];
  
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter components based on search term
  const filteredComponents = components.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-bg-color" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" style={{ width: '60px', height: '60px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faculty">Faculty</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TimeTable">TimeTable</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Assignments">Assignments</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Feedback">Feedback</Link> 
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/action">Action</Link>
                <Link className="dropdown-item" to="/another-action">Another action</Link>
                <Link className="dropdown-item" to="/something-else">Something else here</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/separated-link">Separated link</Link>
              </div>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="button">Search</button>
          </form>
          {searchTerm && (
            <div className="search-results mt-2">
              <ul className="list-unstyled">
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((component, index) => (
                    <li key={index}>
                      <Link to={component.path} className="text-decoration-none">
                        {component.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No results found</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
