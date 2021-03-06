import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";

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
  setEditMode=(value)=>{
    this.setState({
        editMode: value
    })
}
setNewJob=(job)=>{
  this.setState({newJob:job})
}
handleChange=(e)=>{
  this.setNewJob({
      ...this.state.newJob,
      [e.target.id]:e.target.value,
      })
}
handleSubmit=(e)=>{
  e.preventDefault();
  this.props.editJob(this.props.job.jobId,this.state.newJob)
  this.setEditMode(false)
}
  render() {
    let template;
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
     <button type="submit" className="btn btn--save">Save</button>
     <button type='button' className="btn btn--cancel"  onClick={()=>this.setEditMode(false)}>Cancel</button>
      </div>
     </form>
  )
const viewTemplate=(
 <div className="section__item--data">
 <div>
  <p className="section-position">{this.props.job.jobPosition}</p>
  <p className="section-place">
    {this.props.job.jobCompany} - {this.props.job.jobLocation}
  </p>
  <p className="section-dates">
    {this.props.job.jobStart} to {this.props.job.jobEnd}
  </p>
  <ul className="section-tasks">
  
    {/* {this.props.job.jobTasks.map((task) => { */}
      <li>{this.props.job.jobTasks}</li>
    {/* })} */}
  </ul>
</div>
<div className="btn-group-view">
  <button type="button" className='btn btn--icon' onClick={()=>
        {
            this.setEditMode(true)
            this.setNewJob(this.props.job)
            }}
            ><Icon path={mdiPencil}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    <button type="button" className='btn btn--icon' onClick={()=>this.props.deleteJob(this.props.id)}><Icon path={mdiTrashCanOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    </div>
    </div>
)
    
    
if (this.state.editMode) {
template= editTemplate;
}
else {
template= viewTemplate;
}
    return <li>
      {template}
    </li>
  }
}

export default Job;
