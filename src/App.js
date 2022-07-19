import "./styles/App.css";
import "./styles/sections.css";
import { useState } from "react";
import SchoolForm from "./components/SchoolForm";

import School from "./components/School";
import Job from "./components/Job";
import JobForm from "./components/JobForm";
import uniqid from "uniqid";
import Icon from "@mdi/react";
import { mdiPlusBoxOutline } from "@mdi/js";
import General from "./components/General";

const App = (props) => {
  const [schools, setSchools] = useState(props.degrees);
  const [jobs, setJobs] = useState(props.jobs);
  const [schoolForm, setSchoolForm] = useState(false);
  const [jobForm, setJobForm] = useState(false);
  const [general, setGeneral] = useState(props.general);

  const addSchool = (school) => {
    const newSchool = { ...school, schoolId: "school-" + uniqid() };

    setSchools([...schools, newSchool]);
  };
  const deleteSchool = (id) => {
    const remainingSchools = schools.filter((school) => id !== school.schoolId);
    setSchools(remainingSchools);
  };
  const editSchool = (id, newSchool) => {
    const editedSchoolList = schools.map((school) => {
      if (id === school.schoolId) {
        return { ...school, ...newSchool };
      }
      return school;
    });

    setSchools(editedSchoolList);
  };
  const addJob = (job) => {
    const newJob = { ...job, jobId: "job-" + uniqid() };

    setJobs([...jobs, newJob]);
  };
  const deleteJob = (id) => {
    const remainingJobs = jobs.filter((job) => id !== job.jobId);
    setJobs(remainingJobs);
  };
  const editJob = (id, newJob) => {
    const editedJobList = jobs.map((job) => {
      if (id === job.jobId) {
        return { ...job, ...newJob };
      }
      return job;
    });
    setJobs(editedJobList);
  };
  const editGeneral = (newGeneral) => {
    setGeneral(newGeneral);
  };

  return (
    <div className="container">
      <ul>
        <li className="section">
          <div className="section__body">
            <ul className="section-list">
              <General
                general={general}
                key={general.id}
                editGeneral={editGeneral}
              />
            </ul>
          </div>
        </li>
        <li className="section">
          <div className="section__heading">
            <p className="section__title">Education</p>
            <button
              type="button"
              className="btn btn--icon"
              onClick={() => {
                setSchoolForm(true);
              }}
            >
              <Icon
                path={mdiPlusBoxOutline}
                size={1}
                horizontal
                vertical
                rotate={180}
              />
            </button>
          </div>
          {schoolForm ? (
            <SchoolForm addSchool={addSchool} setSchoolForm={setSchoolForm} />
          ) : null}
          <div className="section__body">
            <ul className="section-list">
              {/*In schools array, for each item,iterate over properties and return p element with property*/}
              {schools.map((school) => {
                return (
                  <School
                    id={school.schoolId}
                    school={school}
                    key={school.schoolId}
                    deleteSchool={deleteSchool}
                    editSchool={editSchool}
                  />
                );
              })}
            </ul>
          </div>
        </li>

        <li className="section">
          <div className="section__heading">
            <p className="section__title">Work Experience</p>
            <button
              type="button"
              className="btn btn--icon"
              onClick={() => {
                setJobForm(true);
              }}
            >
              <Icon
                path={mdiPlusBoxOutline}
                size={1}
                horizontal
                vertical
                rotate={180}
              />
            </button>
          </div>
          {jobForm ? <JobForm addJob={addJob} setJobForm={setJobForm} /> : null}
          <div className="section__body">
            <ul className="section-list">
              {/*In schools array, for each item,iterate over properties and return p element with property*/}
              {jobs.map((job) => {
                return (
                  <Job
                    id={job.jobId}
                    job={job}
                    key={job.jobId}
                    deleteJob={deleteJob}
                    editJob={editJob}
                  />
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
