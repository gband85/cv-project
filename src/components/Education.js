import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <ul>
                <li>{this.props.schoolName}</li>
                <li>{this.props.schoolSubject}</li>
                <li>{this.props.schoolStart}</li>
                <li>{this.props.schoolEnd}</li>
            </ul>

        )
    }
}

export default Education;