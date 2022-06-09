import React, { Component } from "react";

class Profession extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
            <div className="section">
<ul>
    <li className="section-title">{this.props.position}</li>
    <li className="section-place">{this.props.company}</li>
<li>{this.props.positionStart} to {this.props.positionEnd}</li>    
    <li>{this.props.tasks}</li>
    
   
</ul>
<div>
<button type="button" onClick={this.props.editProfessionFn}>Edit</button>
</div>
</div>
        )
    }
}

export default Profession;