import './styles/App.css';
import React, { Component } from 'react';
// import GeneralForm from './components/GeneralForm';
import Profession from './components/Profession';
import Education from './components/Education';
import General from './components/General';
import GeneralForm from './components/GeneralForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      sendGeneral: false,
      sendEducation: false,
      sendProfession: false,
       name: "",
        email: "",
        phone: "",
// schoolName: "",
// schoolSubject: "",
// schoolStart: "",
// schoolEnd: "",
// company: "",
// position: "",
// tasks: "",
// positionStart: "",
// positionEnd: "",
   }
  this.handleChange=this.handleChange.bind(this);
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
  render() {
    let section;
    //  const {schoolName,schoolSubject,schoolStart,schoolEnd,company,position,tasks,positionStart,positionEnd,sendGeneral}  = this.state;
    //const {handleChange,onSubmitGeneral,onSubmitEducation,onSubmitProfession}=this;
   if (this.state.sendGeneral) {
     section=<General {...this.state}/>
   }
   else {
      section=<GeneralForm onSubmitGeneral={this.onSubmitGeneral} handleChange={this.handleChange} {...this.state}/>
   }
  return (
    <div>
{section}
        <label htmlFor="schoolName">School</label>
<input
    className="" 
    onChange={handleChange}
value={schoolName}
type="text"
id="schoolName"
required
/>
        <label htmlFor="schoolSubject">Subject</label>
<input
    className="" 
    onChange={handleChange}
value={schoolSubject}
type="text"
id="schoolSubject"
required
/>
        <label htmlFor="schoolStart">Start Date</label>
<input
    className="" 
    onChange={handleChange}
value={schoolStart}
type="date"
id="schoolStart"
required
/>
        <label htmlFor="schoolEnd">End Date</label>
<input
    className="" 
    onChange={handleChange}
value={schoolEnd}
type="date"
id="schoolEnd"
required
/>
<button type='submit'>Save</button>
            </form>
           {this.state.sendEducation && <Education {...this.state}/>}
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
{this.state.sendProfession && <Profession {...this.state}/>} */}
</div>
  );
}
}

export default App;
