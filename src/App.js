import "./styles/App.css";
import React, { Component } from "react";
import EducationForm from "./components/EducationForm";
import Profession from "./components/Profession";
//import Education from "./components/Education";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";
import School from "./components/School";
import "./styles/sections.css";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editGeneral: false,
      editEducation: true,
      editProfession: true,
      name: "Garrett Anderson",
      email: "keaton85@gmail.com",
      phone: "2566048356",
      school: {
      schoolDegree: "",
      schoolName: "",
      schoolLocation: "",
      schoolStart: "",
      schoolEnd: "",
      id: uniqid(),
    },
    schools: [
      {
        schoolDegree: "Bachelor of Science in Biology2",
        schoolName: "University of Alabama in Huntsville",
        schoolLocation: "Huntsville, AL",
        schoolStart: "2008-10-22",
        schoolEnd: "2012-11-02",
        id: uniqid(),
      },
      {
        schoolDegree: "Bachelor of Science in Biology3",
        schoolName: "University of Alabama in Huntsville",
        schoolLocation: "Huntsville, AL",
        schoolStart: "2008-10-22",
        schoolEnd: "2012-11-02",
        id: uniqid(),
      },
    ],

      jobs: [{
        position: "Head Widgeteer",
        company: "Widgets, Inc.",
        companyLocation: "Rochester, NY",        
        tasks: [
          "Build widgets from appropriate source materials",
          "Fix widgets that are returned",
          "Sell widgets on website",
        ],
        positionStart: "2013-02-13",
        positionEnd: "2019-11-02",
        id: uniqid(),
      },
      {
        position: "Head Widgeteer",
        company: "Widgets, Inc.",
        companyLocation: "Rochester, NY",        
        tasks: [
          "Build widgets from appropriate source materials",
          "Fix widgets that are returned",
          "Sell widgets on website",
        ],
        positionStart: "2013-02-13",
        positionEnd: "2019-11-02",
        id: uniqid(),
      }],
      job: {
        position: "",
        company: "",
        companyLocation: "",        
        tasks: [
          
        ],
        positionStart: "2013-02-13",
        positionEnd: "2019-11-02",
        id: uniqid(),
      },
    };
    this.handleGeneralChange=this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);    
    this.editGeneralFn = this.editGeneralFn.bind(this);
    this.editEducationFn=this.editEducationFn.bind(this);
    this.onSubmitEducation=this.onSubmitEducation.bind(this);
    this.onSubmitGeneral=this.onSubmitGeneral.bind(this);
  }

  handleGeneralChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleEducationChange = (e) => {
    this.setState({
      school: {
        ...this.state.school,
        [e.target.id]: e.target.value,
        id: this.state.school.id,
      },
    });
  };
  
  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
      editGeneral: false,
    });
  };

  onSubmitEducation = (e) => {
       e.preventDefault();
    this.setState({
      editEducation: false,
      schools: this.state.schools.concat(this.state.school),
      school: {
        schoolDegree: "",
        schoolName: "",
        schoolLocation: "",
        schoolStart: "",
        schoolEnd: "",
        id: uniqid(),
      },
    });
 
  };
  
  editGeneralFn = () => {
    this.setState({
      editGeneral: true,
    });
    // return <GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleChange} {...this.state}/>
  };
  editSchool = (id,newSchool) => {
    this.setState({
      editEducation: true,
    });
  };
  
  render() {

    
    return (
      <div className="container">
              <div className="section">
        <p className="section-title">Education</p>
        <div className="section-body">
          <ul>

            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.state.schools.map((school1) => {
              return (
                <School
                  schoolDegree={school1.schoolDegree}
                  schoolName={school1.schoolName}
                  schoolLocation={school1.schoolLocation}
                  schoolStart={school1.schoolStart}
                  schoolEnd={school1.schoolEnd}
                  
                />
              );
            })}
          </ul>
          </div>

          </div>
          <EducationForm onSubmitEducation={this.onSubmitEducation} handleEducationChange={this.handleEducationChange}/>

      </div>    );
  }
}

export default App;
