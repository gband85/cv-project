import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";
import { validatePosition } from "./validate";

const Job = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [newJob, setNewJob] = useState({
    jobPosition: "",
    jobCompany: "",
    jobLocation: "",
    jobStart: "",
    jobEnd: "",
    jobTasks: [],
  });
  const [formError, setFormError] = useState(null);
  const handleChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    let error = validatePosition(newJob.jobPosition, "position");
    if (error !== null) {
      setFormError(error);
      return;
    }
    props.editJob(props.job.jobId, newJob);
    setEditMode(false);
  };

  let template;
  const editTemplate = (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-field">
          <label htmlFor="jobPosition">Position</label>
          <input
            name="jobPosition"
            onChange={handleChange}
            value={newJob.jobPosition}
            type="text"
            id="jobPosition"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="jobCompany">Company</label>
          <input
            name="jobCompany"
            onChange={handleChange}
            value={newJob.jobCompany}
            type="text"
            id="jobCompany"
          />
        </div>
        <div className="input-field">
          <label htmlFor="jobLocation">Location</label>
          <input
            onChange={handleChange}
            value={newJob.jobLocation}
            type="date"
            id="jobLocation"
          />
        </div>
        <div className="input-field">
          <label htmlFor="jobStart">Start date</label>
          <input
            onChange={handleChange}
            value={newJob.jobStart}
            type="date"
            id="jobStart"
          />
        </div>
        <div className="input-field">
          <label htmlFor="jobEnd">End date</label>
          <input
            onChange={handleChange}
            value={newJob.jobEnd}
            type="date"
            id="jobEnd"
          />
        </div>
        <div className="input-field">
          <label htmlFor="jobTasks">Tasks</label>
          <textarea
            onChange={handleChange}
            value={newJob.jobTasks}
            id="jobTasks"
          ></textarea>
        </div>
        <div className="btn--group">
          <button type="submit" className="btn btn--save">
            Save
          </button>
          <button
            type="button"
            className="btn btn--cancel"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="errors">{formError}</div>
    </div>
  );
  const viewTemplate = (
    <div className="section__item--data">
      <div>
        <p className="section-position">{props.job.jobPosition}</p>
        <p className="section-place">
          {props.job.jobCompany} - {props.job.jobLocation}
        </p>
        <p className="section-dates">
          {props.job.jobStart} to {props.job.jobEnd}
        </p>
        <p className="section-tasks">{props.job.jobTasks}</p>
      </div>
      <div className="btn-group-view">
        <button
          type="button"
          className="btn btn--icon"
          onClick={() => {
            setEditMode(true);
            setNewJob(props.job);
          }}
        >
          <Icon path={mdiPencil} size={1} horizontal vertical rotate={180} />
        </button>
        <button
          type="button"
          className="btn btn--icon"
          onClick={() => props.deleteJob(props.id)}
        >
          <Icon
            path={mdiTrashCanOutline}
            size={1}
            horizontal
            vertical
            rotate={180}
          />
        </button>
      </div>
    </div>
  );

  if (editMode) {
    template = editTemplate;
  } else {
    template = viewTemplate;
  }
  return <li className="section-item">{template}</li>;
};

export default Job;
