import React, { Component, useState } from "react";

const SchoolForm =(props)=> {
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
        props.addSchool(school)
        setSchool( {
            schoolDegree:"",
schoolName:"",
schoolLocation:"",
schoolStart:"",
schoolEnd:"",
    })
    }
    

        return (
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
required
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
required
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
required
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
required
/>
</div>
<div className="btn-group">
<button type='submit' className="btn--save">Save</button>
<button type='button'onClick={()=>props.showForm("School",false)}>Cancel</button>
</div>
            </form>

        )
    
}

export default SchoolForm;