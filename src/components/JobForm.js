import React, { Component } from "react";

class JobForm extends Component {
    constructor(props) {
      super(props);
      this.state={
        job:{
          jobPosition:"",
          jobCompany:"",
          jobLocation:"",
          jobStart:"",
          jobEnd:"",
          jobTasks:[]
        }
      }
    }
    setJob=(job)=>{
      this.setState({job})
  }

  handleChange=(e)=>{
    
this.setJob({
  ...this.state.job,
  [e.target.id]:e.target.value,
  })

}

  handleSubmit=(e)=>{
      e.preventDefault()
      this.props.addJob(this.state.job)

  }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="input-field">
                 <label htmlFor="jobPosition">Position</label>
         <input
            name="jobPosition"
            onChange={this.handleChange}
            value={this.state.job.jobPosition}
           type="text"
           id="jobPosition"
         />
         </div>
          <div className="input-field">
          <label htmlFor="jobCompany">Company</label>
         <input
           name="jobCompany"
         onChange={this.handleChange}
         value={this.state.job.jobCompany}
         type="text"
         id="jobCompany"
         />
    </div>     
    <div className="input-field">
         <label htmlFor="jobLocation">Location</label>
         <input
            onChange={this.handleChange}
            value={this.state.job.jobLocation}
           type="text"
           id="jobLocation"
         />
         </div>
         <div className="input-field">
         <label htmlFor="jobStart">Start date</label>
         <input
            onChange={this.handleChange}
            value={this.state.job.jobStart}
           type="date"
           id="jobStart"
         />
         </div>
         <div className="input-field">
                 <label htmlFor="jobEnd">End date</label>
         <input
            onChange={this.handleChange}
            value={this.state.job.jobEnd}
           type="date"
           id="jobEnd"
         />
         </div>
         <div className="input-field">
                 <label htmlFor="jobTasks">Tasks</label>
         <textarea
         onChange={this.handleChange}
         value={this.state.job.jobTasks}
         id="jobTasks"
         ></textarea>
         </div>
         <div className="btn-group">
         <button type="submit">Save</button>
          </div>
         </form>
      )

        
    }
}

export default JobForm;