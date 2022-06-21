import "./styles/App.css";
import React, { Component } from "react";
import SchoolForm from "./components/SchoolForm";

import School from "./components/School";
import Job from "./components/Job"
import JobForm from "./components/JobForm"
import "./styles/sections.css";
import uniqid from "uniqid";
import Icon from '@mdi/react';
import { mdiPlusBoxOutline } from '@mdi/js'; 
import General from "./components/General";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchoolForm:false,
      showJobForm:false,
      general:{
      name: "Garrett Anderson",
      email: "keaton85@gmail.com",
      phone: "2566048356",
      },
    schools: this.props.degrees,
      jobs: this.props.jobs,
    };
 
  }
showForm=(section,value)=>{
this.setState({
  ["show"+section+"Form"]:value
})
}
  addSchool=(school)=>{
    const newSchool={...school,schoolId:"school-"+uniqid()}
    console.log(newSchool)
    // this.setState({
    //  // editEducation: false,
    //   schools: this.state.schools.concat(school),
    // })
    this.setSchools([...this.state.schools,newSchool])
  }
  setSchools=(value)=>{
    this.setState({
     schools:value
    })
  }
  deleteSchool=(id)=>{
    const remainingSchools=this.state.schools.filter(school=>id!==school.schoolId)
    this.setSchools(remainingSchools)
  }
  editSchool=(id,newSchool)=>{
    console.log(newSchool)
    const editedSchoolList=this.state.schools.map(school=>{
      if (id===school.schoolId) {
        return {...school,...newSchool}
      }
      return school
    })
    console.log(editedSchoolList)
    this.setSchools(editedSchoolList)
  }
  addJob=(job)=>{
    const newJob={...job,jobId:"job-"+uniqid()}
    console.log(newJob)
     this.setJobs([...this.state.jobs,newJob])
  }
  setJobs=(value)=>{
    this.setState({
     jobs:value
    })
  }
  deleteJob=(id)=>{
    const remainingJobs=this.state.jobs.filter(job=>id!==job.jobId)
    this.setJobs(remainingJobs)
  }
  editJob=(id,newJob)=>{
    const editedJobList=this.state.jobs.map(job=>{
      if (id===job.jobId) {
        return {...job,...newJob}
      }
      return job
    })
    this.setJobs(editedJobList)
  }
  setGeneral=(value)=>{
    this.setState({
      general:value
    })
  }
  editGeneral=(newGeneral)=>{
    this.setGeneral(newGeneral)
  }
  render() {
   
    return (
      <div className="container">
      <ul>
      <li className="section">
      <div className="section-heading">
        <p className="section-title">General Info</p>
        </div>
        <ul>
        <General
          general={this.state.general}          
          key={this.state.general.id}
          editGeneral={this.editGeneral}
        />
        </ul>
        </li>
              <li className="section">
              <div className="section-heading">
        <p className="section-title">Education</p>
        <button type="button" onClick={()=>{this.showForm("School",true)}}><Icon path={mdiPlusBoxOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    </div>
        <div className="section-body">
       {this.state.showSchoolForm ? <SchoolForm addSchool={this.addSchool}/> : null}
          <ul>

            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.state.schools.map((school) => {
              return (
                <School
                id={school.schoolId}
                school={school}
key={school.schoolId}
                deleteSchool={this.deleteSchool}
                editSchool={this.editSchool}

                />

              );
            })}
          </ul>
          </div>

          </li>

          <li className="section">
          <div className="section-heading">
        <p className="section-title">Work Experience</p>
        <button type="button" onClick={()=>{this.showForm("Job",true)}}><Icon path={mdiPlusBoxOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    </div>
        <div className="section-body">
        {this.state.showJobForm ? <JobForm addJob={this.addJob}/> : null}
          <ul>

            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.state.jobs.map((job) => {
              return (
                <Job
                id={job.jobId}
                job={job}
key={job.jobId}
                deleteJob={this.deleteJob}
                editJob={this.editJob}

                />

              );
            })}
          </ul>
          </div>

          </li>
</ul>
      </div>    );
  }
}

export default App;
