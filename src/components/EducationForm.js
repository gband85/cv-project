import React, { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {schoolName,schoolSubject,schoolStart,schoolEnd,handleChange,onSubmitEducation}=this.props;
        return (
<form onSubmit={onSubmitEducation}>
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

        )
    }
}

export default EducationForm;