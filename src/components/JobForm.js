import React, { Component, useState } from "react";

const JobForm = (props) => {
  const [job, setJob] = useState({
    jobPosition: "",
    jobCompany: "",
    jobLocation: "",
    jobStart: "",
    jobEnd: "",
    jobTasks: [],
  });
  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addJob(job);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="jobPosition">Position</label>
        <input
          name="jobPosition"
          onChange={handleChange}
          value={job.jobPosition}
          type="text"
          id="jobPosition"
        />
      </div>
      <div className="input-field">
        <label htmlFor="jobCompany">Company</label>
        <input
          name="jobCompany"
          onChange={handleChange}
          value={job.jobCompany}
          type="text"
          id="jobCompany"
        />
      </div>
      <div className="input-field">
        <label htmlFor="jobLocation">Location</label>
        <input
          onChange={handleChange}
          value={job.jobLocation}
          type="text"
          id="jobLocation"
        />
      </div>
      <div className="input-field">
        <label htmlFor="jobStart">Start date</label>
        <input
          onChange={handleChange}
          value={job.jobStart}
          type="date"
          id="jobStart"
        />
      </div>
      <div className="input-field">
        <label htmlFor="jobEnd">End date</label>
        <input
          onChange={handleChange}
          value={job.jobEnd}
          type="date"
          id="jobEnd"
        />
      </div>
      <div className="input-field">
        <label htmlFor="jobTasks">Tasks</label>
        <textarea
          onChange={handleChange}
          value={job.jobTasks}
          id="jobTasks"
        ></textarea>
      </div>
      <div className="btn-group">
        <button type="submit" className="btn--save">
          Save
        </button>
        <button type="button" onClick={() => props.setJobForm(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default JobForm;
