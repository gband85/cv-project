import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {schoolName,schoolSubject,schoolStart,schoolEnd,handleChange}=this.props;
        return (
            
<form>
        <label htmlFor="schoolName">School</label>
<input
    className="" 
    onChange={handleChange}
value={schoolName}
type="text"
id="schoolName"
/>
        <label htmlFor="schoolSubject">Subject</label>
<input
    className="" 
    onChange={handleChange}
value={schoolSubject}
type="text"
id="schoolSubject"
/>
        <label htmlFor="schoolStart">Start Date</label>
<input
    className="" 
    onChange={handleChange}
value={schoolStart}
type="date"
id="schoolStart"
/>
        <label htmlFor="schoolEnd">End Date</label>
<input
    className="" 
    onChange={handleChange}
value={schoolEnd}
type="date"
id="schoolEnd"
/>
            </form>
        )
    }
}

export default Education;