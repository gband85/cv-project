import React, { Component } from "react";

class Profession extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
<ul>
    <li>{this.props.company}</li>
    <li>{this.props.position}</li>
    <li>{this.props.tasks}</li>
    <li>{this.props.positionStart}</li>
    <li>{this.props.positionEnd}</li>
</ul>
        )
    }
}

export default Profession;