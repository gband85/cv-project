import React, { Component } from "react";
import '../styles/sections.css'

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div className="section">
            <p className="section-title">Education</p>
<div>
            <ul>
                <li className="position-title">{this.props.schoolDegree}</li>
                <li className="section-place">{this.props.schoolName} - {this.props.schoolLocation}</li>
                <li>{this.props.schoolStart} to {this.props.schoolEnd}</li>
                            </ul>
            <div>
                <button type="button" onClick={this.props.editEducationFn}>Edit</button>
            </div>            
            </div>
            </div>
        )
    }
}

export default Education;