import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const GENERAL_DATA={
  name: "John Smith",
  email: "jsmith@testmail.com",
  phone: "123-456-7890",
}

const DEGREE_DATA=     [
  {
    schoolDegree: "Master of Science in Biology",
    schoolName: "Science University",
   schoolLocation: "Mainland,SC",
    schoolStart: "2013-01-22",
    schoolEnd: "2015-09-02",
    schoolId: "school-0"
  },
  {
    schoolDegree: "Bachelor of Science in Biology",
    schoolName: "Science University",
    schoolLocation: "Mainland, SC",
    schoolStart: "2008-08-22",
    schoolEnd: "2012-12-02",
    schoolId: "school-1",
  },
];
const JOB_DATA=[{
  jobPosition: "Head Scientist",
  jobCompany: "Genes, Inc.",
  jobLocation: "Rochester, NY",        
  jobTasks: [
    "Create mutant dinosaurs with laser-eyes, enabling armies to wage war like never before",
    "Supervise creation of novel therapies for cancer treatment",
    "Supervise clinical trials",
  ],
  jobStart: "2019-11-13",
  jobEnd: "Current",
  jobId: "job-0",
},
{
  jobPosition: "Junior Scientist",
  jobCompany: "Genes, Inc.",
  jobLocation: "Rochester, NY",        
  jobTasks: [
    "Perform genetic sequencing",
    "Test samples of unknown genetic material",
    "Perform research",
  ],
  jobStart: "2016-02-13",
  jobEnd: "2019-11-02",
  jobId: "job-1",
}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div class="navbar">
    <h1 class="navbar__brand">Resume Builder</h1>
</div>
    <App degrees={DEGREE_DATA} jobs={JOB_DATA} general={GENERAL_DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
