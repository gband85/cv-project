import React, { Component } from "react";

class Profession extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
            <div>
<ul>
    <li>{this.props.company}</li>
    <li>{this.props.position}</li>
    <li>{this.props.tasks}</li>
    <li>{this.props.positionStart}</li>
    <li>{this.props.positionEnd}</li>
</ul>
<button type="button" onClick={this.props.editProfessionFn}>Edit</button>
</div>
        )
    }
}

export default Profession;