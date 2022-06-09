import './styles/App.css';
import React, { Component } from 'react';
 import EducationForm from './components/EducationForm';
import Profession from './components/Profession';
import Education from './components/Education';
import General from './components/General';
import GeneralForm from './components/GeneralForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      editGeneral: false,
      sendEducation: false,
      sendProfession: false,
       name: "Garrett",
        email: "keaton85@gmail.com",
        phone: "2566048356",
schoolName: "",
schoolSubject: "",
schoolStart: "",
schoolEnd: "",
// company: "",
// position: "",
// tasks: "",
// positionStart: "",
// positionEnd: "",
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
      sendGeneral: true
  });
};

onSubmitEducation = (e) => {
    this.setState({
      sendEducation: true
  });
  e.preventDefault();
};
onSubmitProfession = (e) => {
  this.setState({
    sendProfession: true
});
e.preventDefault();
};
editGeneralFn=()=>{
  this.setState({
    editGeneral:true
  })
   // return <GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleChange} {...this.state}/>
  }
 


  render() {
    let generalSection,educationSection;
    //  const {schoolName,schoolSubject,schoolStart,schoolEnd,company,position,tasks,positionStart,positionEnd,sendGeneral}  = this.state;
    //const {handleChange,onSubmitGeneral,onSubmitEducation,onSubmitProfession}=this;
   if (this.state.editGeneral) {
           generalSection=<GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleChange} {...this.state}/>

   }
   else { 
         generalSection=<General {...this.state} editGeneralFn={this.editGeneralFn}/>

   }

if (this.state.sendEducation) {
educationSection=<Education {...this.state} />
}
else {
  educationSection=<EducationForm onSubmitEducation={this.onSubmitEducation} handleChange={this.handleChange} {...this.state}/>
}
  return (
    <div>
{generalSection}
{/* <bsutton onClick={this.sendGeneral()}></button> */}
{educationSection}
           {/* {this.state.sendEducation && <Education {...this.state}/>}
           <form onSubmit={onSubmitProfession}>
 <label htmlFor="company">Company</label>
<input className=""
  name="company"
onChange={handleChange}
value={company}
type="text"
id="company"
/>
        <label htmlFor="position">Position</label>
<input className=""
   name='position'
   onChange={handleChange}
   value={position}
  type='text'
  id="position"
/>
        <label htmlFor="tasks">Tasks</label>
<textarea className=""
onChange={handleChange}
value={tasks}
id="tasks"
></textarea>
<label htmlFor="positionStart">Start date</label>
<input className=""
   onChange={handleChange}
   value={positionStart}
  type='date'
  id="positionStart"
/>
        <label htmlFor="positionEnd">End date</label>
<input className=""
   onChange={handleChange}
   value={positionEnd}
  type='date'
  id="positionEnd"
/>
<button type='submit'>Save</button>
 
</form>
{this.state.sendProfession && <Profession {...this.state}/>} } */}
</div>
  );
}
}

export default App;
