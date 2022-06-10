import './styles/App.css';
import React, { Component } from 'react';
 import EducationForm from './components/EducationForm';
import Profession from './components/Profession';
import Education from './components/Education';
import General from './components/General';
import GeneralForm from './components/GeneralForm';
import ProfessionForm from './components/ProfessionForm';
import './styles/sections.css';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      editGeneral: false,
      editEducation: true,
      editProfession: true,
       name: "Garrett Anderson",
        email: "keaton85@gmail.com",
        phone: "2566048356",
        school: {
                    schoolDegree: "Bachelor of Science in Biology",
          schoolName: "University of Alabama in Huntsville",
          schoolLocation: "Huntsville, AL",
          schoolStart: "2008-10-22",
          schoolEnd: "2012-11-02",
          id: uniqid()
        },
schools:[],
jobs:[],
job:{
   company: "Widgets, Inc.",
 companyLocation: "Rochester, NY",
 position: "Head Widgeteer",
  tasks: ["Build widgets from appropriate source materials","Fix widgets that are returned","Sell widgets on website"],
   positionStart: "2013-02-13",
 positionEnd: "2019-11-02",
}
    

   }
  this.handleEducationChange=this.handleEducationChange.bind(this);
  this.editGeneralFn=this.editGeneralFn.bind(this);
}

  handleGeneralChange=(e)=>{
    this.setState({
            [e.target.id]: e.target.value
    });
};
handleEducationChange=(e)=>{
  this.setState({
    school: {
         ...this.state.school, [e.target.id]: e.target.value,
          id: this.state.school.id,
    }
  });
};
// handleProfessionChange=(e)=>{
//   this.setState({
//     schoojl: {
//           [e.target.id]: e.target.value
//     }
//   });
// };
onSubmitGeneral = (e) => {
  e.preventDefault();
  this.setState({
      editGeneral: false
  });
};

onSubmitEducation = (e) => {
    this.setState({
      editEducation: false,
      schools: this.state.schools.concat(this.state.school),
      school: {
        schoolDegree: "",
        schoolName: "",          
          schoolLocation: "",
          schoolStart: "",
          schoolEnd: "",
          id: uniqid()
      }
  });
  e.preventDefault();
};
onSubmitProfession = (e) => {
  this.setState({
    editProfession: false,
});
e.preventDefault();
};
editGeneralFn=()=>{
  this.setState({
    editGeneral:true,
  })
   // return <GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleChange} {...this.state}/>
  }
 editEducationFn=()=>{
   this.setState({
     editEducation:true,
   })
 }
 editProfessionFn=()=>{
   this.setState({
     editProfession: true,
   })
 }


  render() {
    let generalSection,educationSection,professionSection;
    //  const {schoolName,schoolSubject,schoolStart,schoolEnd,company,position,tasks,positionStart,positionEnd,sendGeneral}  = this.state;
    //const {handleChange,onSubmitGeneral,onSubmitEducation,onSubmitProfession}=this;
   if (this.state.editGeneral) {
           generalSection=<GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleGeneralChange} {...this.state}/>

   }
   else { 
         generalSection=<General {...this.state} editGeneralFn={this.editGeneralFn}/>

   }

if (this.state.editEducation) {
 educationSection= <EducationForm onSubmitEducation={this.onSubmitEducation} handleEducationChange={this.handleEducationChange} {...this.state}/>

}
else {
  educationSection=<Education {...this.state} editEducationFn={this.editEducationFn}/>
}
if (this.state.editProfession) {
  professionSection= <ProfessionForm onSubmitProfession={this.onSubmitProfession} handleChange={this.handleChange} {...this.state}/>
 
 }
 else {
   professionSection=<Profession {...this.state} editProfessionFn={this.editProfessionFn}/>
 }
  return (
    <div className='container'>
{generalSection}
{/* <bsutton onClick={this.sendGeneral()}></button> */}
{educationSection}
{professionSection}
           {/* {this.state.sendEducation && <Education {...this.state}/>}
          
{this.state.sendProfession && <Profession {...this.state}/>} } */}
</div>
  );
}
}

export default App;
