import React, { Component, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPencil, mdiTrashCanOutline } from '@mdi/js'; 
import uniqid from "uniqid";
import { validatePosition } from './validate';

const School =(props)=> {
const [editMode,setEditMode]=useState(false);
const [formError,setFormError]=useState(null);
const [newSchool,setNewSchool]=useState({
    schoolDegree:"",
    schoolName:"",
    schoolLocation:"",
    schoolStart:"",
    schoolEnd:"",
    });
const handleChange=(e)=>{
    setNewSchool({
        ...newSchool,
        [e.target.id]:e.target.value,
        })
}
const handleSubmit=(e)=>{
    e.preventDefault();
    setFormError(null);
    let error=validatePosition(newSchool.schoolDegree,"subject");
    if (error!==null) {
    setFormError(error);
    return
    }
    props.editSchool(props.school.schoolId,newSchool);
       setEditMode(false)
}

    let template;
  const editTemplate=(
    <div>
<form onSubmit={handleSubmit} className="section-item-form" noValidate>
<div className="input-field">
            <label htmlFor="schoolDegree">Subject</label>
    <input
        className="" 
       onChange={handleChange}
    value={newSchool.schoolDegree}
    type="text"
    id="schoolDegree"
    required
    />
    </div>
    <div className="input-field">
            <label htmlFor="schoolName">School</label>
    <input
        className="" 
        onChange={handleChange}
    value={newSchool.schoolName}
    type="text"
    id="schoolName"
    />
    </div>
    <div className="input-field">
            <label htmlFor="schoolStart">Start Date</label>
    <input
        className="" 
       onChange={handleChange}
   value={newSchool.schoolStart}
    type="date"
    id="schoolStart"
    />
    </div>
    <div className="input-field">
            <label htmlFor="schoolEnd">End Date</label>
    <input
        className="" 
       onChange={handleChange}
    value={newSchool.schoolEnd}
    type="date"
    id="schoolEnd"
    />
    </div>
    <div className="btn-group">
    <button type='submit' className="btn btn--save">Save</button>
   <button type='button' className='btn btn--cancel' onClick={()=>setEditMode(false)}>Cancel</button>
    </div>
                </form>
                <div className="errors">
{formError}
  </div>
  </div>
                );
 const viewTemplate=(
    
    <div className='section__item--data'>
    <div>
    <p className="section-position">{props.school.schoolDegree}</p>
        <p className="section-place">{props.school.schoolName} - {props.school.schoolLocation}</p>
        <p className="section-dates">{props.school.schoolStart} to {props.school.schoolEnd}</p>
        </div>
        <div className='btn-group-view'>
        <button type="button" className='btn btn--icon' onClick={()=>
        {
            setEditMode(true)
            setNewSchool(props.school)
            }}
            ><Icon path={mdiPencil}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    <button type="button" className='btn btn--icon' onClick={()=>props.deleteSchool(props.id)}><Icon path={mdiTrashCanOutline}
    size={1}
    horizontal
    vertical
    rotate={180}
    /></button>
    </div>
        </div>
)
                if (editMode) {
template= editTemplate
                }
                else {
                    template= viewTemplate
                }
                return (
                    <li className='section-item'> 
                    {template}
                    </li>
                )

}
export default School;