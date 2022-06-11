import React, { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {school,schoolName,schoolDegree,schoolStart,schoolEnd,handleEducationChange,onSubmitEducation}=this.props;
        return (
<form onSubmit={onSubmitEducation}>
<div className="input-field">
        <label htmlFor="schoolName">School</label>
<input
    className="" 
    onChange={handleEducationChange}
value={school.schoolName}
type="text"
id="schoolName"
required
/>
</div>
<div className="input-field">
        <label htmlFor="schoolSubject">Subject</label>
<input
    className="" 
    onChange={handleEducationChange}
value={school.schoolDegree}
type="text"
id="schoolDegree"
required
/>
</div>
<div className="input-field">
        <label htmlFor="schoolStart">Start Date</label>
<input
    className="" 
    onChange={handleEducationChange}
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
    onChange={handleEducationChange}
value={school.schoolEnd}
type="date"
id="schoolEnd"
required
/>
</div>
<div className="btn-group">
<button type='submit'>Save</button>
</div>
            </form>

        )
    }
}

export default EducationForm;