import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div className="section">
            <ul>
                <li>{this.props.schoolName}</li>
                <li>{this.props.schoolSubject}</li>
                <li>{this.props.schoolStart}</li>
                <li>{this.props.schoolEnd}</li>
            </ul>
            <div>
                <button type="button" onClick={this.props.editEducationFn}>Edit</button>
            </div>            
            </div>
        )
    }
}

export default Education;