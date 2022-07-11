import "./styles/App.css";
import React, { Component, useState } from "react";
import SchoolForm from "./components/SchoolForm";

import School from "./components/School";
import Job from "./components/Job"
import JobForm from "./components/JobForm"
import "./styles/sections.css";
import uniqid from "uniqid";
import Icon from '@mdi/react';
import { mdiPlusBoxOutline } from '@mdi/js'; 
import General from "./components/General";

const App = (props) => {
    this.state = {
      showSchoolForm:false,
      showJobForm:false,
      general:{
      name: "Garrett Anderson",
      email: "keaton85@gmail.com",
      phone: "2566048356",
      },
    }; 
  const [schools, setSchools] = useState(props.degrees);
  const [jobs, setJobs] = useState(props.jobs);
showForm=(section,value)=>{
this.setState({
  ["show"+section+"Form"]:value
})
}
 const addSchool=(school)=>{
    const newSchool={...school,schoolId:"school-"+uniqid()}
    console.log(newSchool)
    // this.setState({
    //  // editEducation: false,
    //   schools: this.state.schools.concat(school),
    // })
    setSchools([...schools,newSchool])
  }
 const deleteSchool=(id)=>{
    const remainingSchools=schools.filter(school=>id!==school.schoolId)
    setSchools(remainingSchools)
  }
  const editSchool=(id,newSchool)=>{
    console.log(newSchool)
    const editedSchoolList=schools.map(school=>{
      if (id===school.schoolId) {
        return {...school,...newSchool}
      }
      return school
    })
    console.log(editedSchoolList)
    setSchools(editedSchoolList)
  }
 const addJob=(job)=>{
    const newJob={...job,jobId:"job-"+uniqid()}
    console.log(newJob)
     setJobs([...jobs,newJob])
  }
const deleteJob=(id)=>{
    const remainingJobs=jobs.filter(job=>id!==job.jobId)
    setJobs(remainingJobs)
  }
 const editJob=(id,newJob)=>{
    const editedJobList=jobs.map(job=>{
      if (id===job.jobId) {
        return {...job,...newJob}
      }
      return job
    })
   setJobs(editedJobList)
  }
  setGeneral=(value)=>{
    this.setState({
      general:value
    })
  }
  editGeneral=(newGeneral)=>{
    this.setGeneral(newGeneral)
  }
   
    return (
      <div className="container">
      <ul>
      <li className="section">
      <div className="section__heading">
        <p className="section__title">General Info</p>
        </div>
        <div className="section__body">
        <ul>
        <General
          general={this.state.general}          
          key={this.state.general.id}
          editGeneral={this.editGeneral}
        />
        </ul>
        </div>
        </li>
              <li className="section">
              <div className="section__heading">
        <p className="section__title">Education</p>
        <button type="button" className='btn btn--icon' onClick={()=>{this.showForm("School",true)}}><Icon path={mdiPlusBoxOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    </div>
        <div className="section__body">
       {this.state.showSchoolForm ? <SchoolForm addSchool={this.addSchool} showForm={this.showForm}/> : null}
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
          <div className="section__heading">
        <p className="section__title">Work Experience</p>
        <button type="button" className='btn btn--icon' onClick={()=>{this.showForm("Job",true)}}><Icon path={mdiPlusBoxOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    </div>
        <div className="section__body">
        {this.state.showJobForm ? <JobForm addJob={this.addJob} showForm={this.showForm}/> : null}
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

export default App;
