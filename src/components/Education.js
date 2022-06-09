import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div>
            <ul>
                <li>{this.props.schoolName}</li>
                <li>{this.props.schoolSubject}</li>
                <li>{this.props.schoolStart}</li>
                <li>{this.props.schoolEnd}</li>
            </ul>
            <button type="button" onClick={this.props.editEducationFn}>Edit</button>
            </div>
        )
    }
}

export default Education;