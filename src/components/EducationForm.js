import React, { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {schoolName,schoolDegree,schoolStart,schoolEnd,handleChange,onSubmitEducation}=this.props;
        return (
<form onSubmit={onSubmitEducation}>
<div className="input-field">
        <label htmlFor="schoolName">School</label>
<input
    className="" 
    onChange={handleChange}
value={schoolName}
type="text"
id="schoolName"
required
/>
</div>
<div className="input-field">
        <label htmlFor="schoolSubject">Subject</label>
<input
    className="" 
    onChange={handleChange}
value={schoolDegree}
type="text"
id="schoolSubject"
required
/>
</div>
<div className="input-field">
        <label htmlFor="schoolStart">Start Date</label>
<input
    className="" 
    onChange={handleChange}
value={schoolStart}
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
value={schoolEnd}
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