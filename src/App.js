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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm:false,
      name: "Garrett Anderson",
      email: "keaton85@gmail.com",
      phone: "2566048356",
    schools: this.props.degrees,
      jobs: this.props.jobs,
    };
 
  }

  addSchool=(school)=>{
    const newSchool={...school,id:"school-"+uniqid()}
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
    const remainingSchools=this.state.schools.filter(school=>id!==school.id)
    this.setSchools(remainingSchools)
  }
  editSchool=(id,newSchool)=>{
    console.log(newSchool)
    const editedSchoolList=this.state.schools.map(school=>{
      if (id===school.id) {
        return {...school,...newSchool}
      }
      return school
    })
    console.log(editedSchoolList)
    this.setSchools(editedSchoolList)
  }
  render() {
   
    return (
      <div className="container">
              <div className="section">
        <p className="section-title">Education</p>
        <button type="button" onClick={()=>{this.setState({showForm:true})}}><Icon path={mdiPlusBoxOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
        <div className="section-body">
        <SchoolForm addSchool={this.addSchool}/>
          <ul>

            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.state.schools.map((school) => {
              return (
                <School
                id={school.id}
                school={school}
key={school.id}
                deleteSchool={this.deleteSchool}
                editSchool={this.editSchool}

                />

              );
            })}
          </ul>
          </div>

          </div>

          <div className="section">
        <p className="section-title">Education</p>
        <button type="button" onClick={()=>{this.setState({showForm:true})}}><Icon path={mdiPlusBoxOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
        <div className="section-body">
        <JobForm addSchool={this.addSchool}/>
          <ul>

            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.state.jobs.map((job) => {
              return (
                <Job
                id={job.id}
                job={job}
key={job.id}
                deleteSchool={this.deleteSchool}
                editSchool={this.editSchool}

                />

              );
            })}
          </ul>
          </div>

          </div>

      </div>    );
  }
}

export default App;
