import React, { Component } from "react";

class Profession extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
            <div className="section">
<ul>
    <li>{this.props.company}</li>
    <li>{this.props.position}</li>
    <li>{this.props.tasks}</li>
    <li>{this.props.positionStart}</li>
    <li>{this.props.positionEnd}</li>
</ul>
<div>
<button type="button" onClick={this.props.editProfessionFn}>Edit</button>
</div>
</div>
        )
    }
}

export default Profession;