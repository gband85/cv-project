import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state={
      editMode:false,
      newJob:{
        jobPosition:"",
        jobCompany:"",
        jobLocation:"",
        jobStart:"",
        jobEnd:"",
        jobTasks:[]
      }
    }
  }
  render() {
    const editTemplate=(
      <form onSubmit={this.handleSubmit}>
      <div className="input-field">
             <label htmlFor="jobPosition">Position</label>
     <input
        name="jobPosition"
        onChange={this.handleChange}
        value={this.state.newJob.jobPosition}
       type="text"
       id="jobPosition"
     />
     </div>
      <div className="input-field">
      <label htmlFor="jobCompany">Company</label>
     <input
       name="jobCompany"
     onChange={this.handleChange}
     value={this.state.newJob.jobCompany}
     type="text"
     id="jobCompany"
     />
</div>     
<div className="input-field">
     <label htmlFor="jobLocation">Location</label>
     <input
        onChange={this.handleChange}
        value={this.state.newJob.jobLocation}
       type="date"
       id="jobLocation"
     />
     </div>
     <div className="input-field">
     <label htmlFor="jobStart">Start date</label>
     <input
        onChange={this.handleChange}
        value={this.state.newJob.jobStart}
       type="date"
       id="jobStart"
     />
     </div>
     <div className="input-field">
             <label htmlFor="jobEnd">End date</label>
     <input
        onChange={this.handleChange}
        value={this.state.newJob.jobEnd}
       type="date"
       id="jobEnd"
     />
     </div>
     <div className="input-field">
             <label htmlFor="jobTasks">Tasks</label>
     <textarea
     onChange={this.handleChange}
     value={this.state.newJob.jobTasks}
     id="jobTasks"
     ></textarea>
     </div>
     <div className="btn-group">
     <button type="submit">Save</button>
      </div>
     </form>
  )

    
    return (
      <li>
        <p className="section-position">{this.props.position}</p>
        <p className="section-place">
          {this.props.company} - {this.props.companyLocation}
        </p>
        <p className="section-dates">
          {this.props.positionStart} to {this.props.positionEnd}
        </p>
        <ul className="section-tasks">
          {this.props.tasks.map((task) => {
            return <li>{task}</li>;
          })}
        </ul>
        <button type="button" onCpck={this.props.editProfessionFn}>
          <Icon path={mdiPencil} size={1} horizontal vertical rotate={180} />
        </button>
      </li>
    );
  }
}

export default Job;
