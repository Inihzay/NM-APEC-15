// App.js
import React, { useState } from 'react';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [jobs, setJobs] = useState([
{ id: 1, title: 'Frontend Engineer', company: 'CodeCrafters', location: 'Bangalore, Karnataka' }
{ id: 2, title: 'DevOps Specialist', company: 'InnoSys Solutions', location: 'Pune, Maharashtra' }
{ id: 3, title: 'AI/ML Researcher', company: 'TechVanguard Labs', location: 'Hyderabad, Telangana' }
{ id: 4, title: 'Cybersecurity Analyst', company: 'SecureNet Systems', location: 'Chennai, Tamil Nadu' }
]);

  const handleSearch = (searchTerm) => {
    
  };

  const handleFilter = (filterType) => {

  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Job Search App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <h1 className="mb-4">Job Search App</h1>
        <div className="row mb-4">
          <div className="col-md-6">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-md-6">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-secondary" onClick={() => handleFilter('all')}>
                All Jobs
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => handleFilter('frontend')}>
                Frontend
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => handleFilter('backend')}>
                Backend
              </button>
            </div>
          </div>
        </div>
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

export default App;
