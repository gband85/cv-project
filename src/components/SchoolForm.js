import React, { Component, useState } from "react";
import { validatePosition } from "./validate";

const SchoolForm =(props)=> {
    const [formError,setFormError]=useState(null);
    const [school,setSchool]=useState({
        schoolDegree:"",
schoolName:"",
schoolLocation:"",
schoolStart:"",
schoolEnd:"",
    })
   const handleChange=(e)=>{
setSchool({
    ...school,
    [e.target.id]:e.target.value,
    })
}

   const handleSubmit=(e)=>{
        e.preventDefault()
        setFormError(null);
        let error=validatePosition(school.schoolDegree,"subject");
        if (error!==null) {
        setFormError(error);
        return
        }
        props.addSchool(school)
        props.setSchoolForm(false);
        setSchool( {
            schoolDegree:"",
schoolName:"",
schoolLocation:"",
schoolStart:"",
schoolEnd:"",
    })
    }
    

        return (
            <div>
<form onSubmit={handleSubmit}>
<div className="input-field">
        <label htmlFor="schoolSubject">Subject</label>
<input
    className="" 
    onChange={handleChange}
value={school.schoolDegree}
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
value={school.schoolName}
type="text"
id="schoolName"
/>
</div>
<div className="input-field">
        <label htmlFor="schoolLocation">Location</label>
<input
    className="" 
    onChange={handleChange}
value={school.schoolLocation}
type="text"
id="schoolLocation"
/>
</div>
<div className="input-field">
        <label htmlFor="schoolStart">Start Date</label>
<input
    className="" 
    onChange={handleChange}
value={school.schoolStart}
type="date"
id="schoolStart"
/>
</div>
<div className="input-field">
        <label htmlFor="schoolEnd">End Date</label>
<input
    className="" 
    onChange={handleChange}
value={school.schoolEnd}
type="date"
id="schoolEnd"
/>
</div>
<div className="btn--group">
<button type='submit' className="btn btn--save">Save</button>
<button type='button' className="btn btn--cancel" onClick={()=>props.setSchoolForm(false)}>Cancel</button>
</div>
            </form>
            <div className="errors">
{formError}
  </div>
  </div>
        )
    
}

export default SchoolForm;