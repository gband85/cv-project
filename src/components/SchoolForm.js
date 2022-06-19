import React, { Component } from "react";

class SchoolForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            school: {
                schoolDegree:"",
schoolName:"",
schoolLocation:"",
schoolStart:"",
schoolEnd:"",
            }
        }
    }
    setSchool=(school)=>{
        this.setState({school})
    }

    handleChange=(e)=>{
this.setSchool({
    ...this.state.school,
    [e.target.id]:e.target.value,
    })
}

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addSchool(this.state.school)
        this.setSchool( {
            schoolDegree:"",
schoolName:"",
schoolLocation:"",
schoolStart:"",
schoolEnd:"",
    })
    }
    render() {

        return (
<form onSubmit={this.handleSubmit}>
<div className="input-field">
        <label htmlFor="schoolSubject">Subject</label>
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
        <label htmlFor="schoolLocation">Location</label>
<input
    className="" 
    onChange={this.handleChange}
value={this.state.school.schoolLocation}
type="text"
id="schoolLocation"
required
/>
</div>
<div className="input-field">
        <label htmlFor="schoolStart">Start Date</label>
<input
    className="" 
    onChange={this.handleChange}
value={this.state.school.schoolStart}
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
value={this.state.school.schoolEnd}
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

export default SchoolForm;