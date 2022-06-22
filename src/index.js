import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const DEGREE_DATA=     [
  {
    schoolDegree: "Bachelor of Science in Biology2",
    schoolName: "University of Alabama in Huntsville",
   schoolLocation: "Huntsville, AL",
    schoolStart: "2008-10-22",
    schoolEnd: "2012-11-02",
    schoolId: "school-0"
  },
  {
    schoolDegree: "Bachelor of Science in Biology3",
    schoolName: "University of Alabama in Huntsville",
    schoolLocation: "Huntsville, AL",
    schoolStart: "2008-10-22",
    schoolEnd: "2012-11-02",
    schoolId: "school-1",
  },
];
const JOB_DATA=[{
  jobPosition: "Head Widgeteer",
  jobCompany: "Widgets, Inc.",
  jobLocation: "Rochester, NY",        
  jobTasks: [
    "Build widgets",
    "Fix widgets",
    "Sell widgets",
  ],
  jobStart: "2013-02-13",
  jobEnd: "2019-11-02",
  jobId: "job-0",
},
{
  jobPosition: "CEO",
  jobCompany: "Widgets, Inc.",
  jobLocation: "Rochester, NY",        
  jobTasks: [
    "Build widgets",
    "Fix widgets",
    "Sell widgets",
  ],
  jobStart: "2020-02-13",
  jobEnd: "2020-11-02",
  jobId: "job-1",
}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App degrees={DEGREE_DATA} jobs={JOB_DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
