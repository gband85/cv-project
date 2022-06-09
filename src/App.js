import './styles/App.css';
import React, { Component } from 'react';
 import EducationForm from './components/EducationForm';
import Profession from './components/Profession';
import Education from './components/Education';
import General from './components/General';
import GeneralForm from './components/GeneralForm';
import ProfessionForm from './components/ProfessionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      editGeneral: false,
      editEducation: false,
      editProfession: false,
       name: "Garrett",
        email: "keaton85@gmail.com",
        phone: "2566048356",
schoolName: "UAH",
schoolSubject: "Biology",
schoolStart: "2008-10-22",
schoolEnd: "2012-11-02",
 company: "Widgets, Inc.",
 position: "Head Widgeteer",
 tasks: ["build widgets","fix widgets","sell widgets"],
 positionStart: "2013-02-13",
 positionEnd: "2019-11-02",
   }
  this.handleChange=this.handleChange.bind(this);
  this.editGeneralFn=this.editGeneralFn.bind(this);
}

  handleChange=(e)=>{
    this.setState({
            [e.target.id]: e.target.value
    });
};
onSubmitGeneral = (e) => {
  e.preventDefault();
  this.setState({
      editGeneral: false
  });
};

onSubmitEducation = (e) => {
    this.setState({
      editEducation: false
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
           generalSection=<GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleChange} {...this.state}/>

   }
   else { 
         generalSection=<General {...this.state} editGeneralFn={this.editGeneralFn}/>

   }

if (this.state.editEducation) {
 educationSection= <EducationForm onSubmitEducation={this.onSubmitEducation} handleChange={this.handleChange} {...this.state}/>

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
    <div>
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
