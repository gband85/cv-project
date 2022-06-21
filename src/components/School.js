import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPencil, mdiTrashCanOutline } from '@mdi/js'; 
import uniqid from "uniqid";

class School extends Component {
constructor(props) {
super(props)
this.state={
editMode:false,

newSchool:{
    schoolDegree:"",
    schoolName:"",
    schoolLocation:"",
    schoolStart:"",
    schoolEnd:"",
    }
}
}
setEditMode=(value)=>{
    this.setState({
        editMode: value
    })
}

setNewSchool=(school)=>{
    this.setState({newSchool:school})
}
handleChange=(e)=>{
    this.setNewSchool({
        ...this.state.newSchool,
        [e.target.id]:e.target.value,
        })
}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.editSchool(this.props.school.schoolId,this.state.newSchool)
    // this.setSchool({
    //     schoolDegree:"",
    //     schoolName:"",
    //     schoolLocation:"",
    //     schoolStart:"",
    //     schoolEnd:"",
    //     })
    this.setEditMode(false)
}
render() {
    
  const editTemplate=(
<form onSubmit={this.handleSubmit}>
    <div className="input-field">
            <label htmlFor="schoolName">School</label>
    <input
        className="" 
        onChange={this.handleChange}
    value={this.state.newSchool.schoolName}
    type="text"
    id="schoolName"
    required
    />
    </div>
    <div className="input-field">
            <label htmlFor="schoolDegree">Subject</label>
    <input
        className="" 
       onChange={this.handleChange}
    value={this.state.newSchool.schoolDegree}
    type="text"
    id="schoolDegree"
    required
    />
    </div>
    <div className="input-field">
            <label htmlFor="schoolStart">Start Date</label>
    <input
        className="" 
       onChange={this.handleChange}
   value={this.state.newSchool.schoolStart}
    type="date"
    id="schoolStart"
    required
    />
    </div>
    <div className="input-field">
            <label htmlFor="schoolEnd">End Date</label>
    <input
        className="" 
       onChange={this.handleChange}
    value={this.state.newSchool.schoolEnd}
    type="date"
    id="schoolEnd"
    required
    />
    </div>
    <div className="btn-group">
    <button type='submit'>Save</button>
   <button type='button' onClick={()=>this.setEditMode(false)}>Cancel</button>
    </div>
                </form>);
 const viewTemplate=(
    <li> 
    <p className="section-position">{this.props.school.schoolDegree}</p>
        <p className="section-place">{this.props.school.schoolName} - {this.props.school.schoolLocation}</p>
        <p className="section-dates">{this.props.school.schoolStart} to {this.props.school.schoolEnd}</p>
        <button type="button" onClick={()=>
        {
            this.setEditMode(true)
            this.setNewSchool(this.props.school)
            }}
            ><Icon path={mdiPencil}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    <button type="button" onClick={()=>this.props.deleteSchool(this.props.id)}><Icon path={mdiTrashCanOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
        </li>
)
                if (this.state.editMode) {
return editTemplate
                }
                else {
                    return viewTemplate
                }
}
}
export default School;