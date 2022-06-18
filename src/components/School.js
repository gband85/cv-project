import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPencil, mdiTrashCanOutline } from '@mdi/js'; 
import uniqid from "uniqid";

class School extends Component {
constructor(props) {
super(props)
this.state={
editMode:false,
school:{
schoolDegree:"",
schoolName:"",
schoolLocation:"",
schoolStart:"",
schoolEnd:""
}
}
}
setEditMode=(value)=>{
    this.setState({
        editMode: value
    })
}
render() {
  const editTemplate=(
<form onSubmit={this.handleSubmit}>
    <div className="input-field">
            <label htmlFor="schoolName">School</label>
    <input
        className="" 
        onChange={this.handleChange}
    value={this.state.school.schoolName}
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
    value={this.state.school.schoolDegree}
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
   value={this.props.school.schoolStart}
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
    value={this.props.school.schoolEnd}
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
        <p className="section-place">{this.props.school.schoolName} - {this.props.schoolLocation}</p>
        <p className="section-dates">{this.props.school.schoolStart} to {this.props.school.schoolEnd}</p>
        <button type="button" onClick={()=>this.setEditMode(true)}><Icon path={mdiPencil}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    <button type="button" onClick={()=>console.log("deleted")}><Icon path={mdiTrashCanOutline}
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