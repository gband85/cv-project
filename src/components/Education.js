import React, { Component } from "react";
import '../styles/sections.css'

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div className="section">
            <ul>
                <li className="section-title">{this.props.schoolDegree}</li>
                <li className="section-place">{this.props.schoolName}</li>
                <li>{this.props.schoolStart} to {this.props.schoolEnd}s</li>
                            </ul>
            <div>
                <button type="button" onClick={this.props.editEducationFn}>Edit</button>
            </div>            
            </div>
        )
    }
}

export default Education;