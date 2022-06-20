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
