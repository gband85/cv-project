import React, { Component } from "react";
import '../styles/sections.css'
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js'; 

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div className="section">
            <p className="section-title">Education</p>
<div className="section-body">
            <ul>
                <li className="section-position">{this.props.schoolDegree}</li>
                <li className="section-place">{this.props.schoolName} - {this.props.schoolLocation}</li>
                <li className="section-dates">{this.props.schoolStart} to {this.props.schoolEnd}</li>
                            </ul>
            <div>
                <button type="button" onClick={this.props.editEducationFn}><Icon path={mdiPencil}
        size={1}
        horizontal
        vertical
        rotate={180}
        /></button>
            </div>            
            </div>
            </div>
        )
    }
}

export default Education;