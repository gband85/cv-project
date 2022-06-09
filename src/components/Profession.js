import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js'; 

class Profession extends Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
            <div className="section">
            <p className="section-title">Work Experience</p>
        <div className="section-body">
<ul>
    <li className="section-position">{this.props.position}</li>
    <li className="section-place">{this.props.company} - {this.props.companyLocation}</li>
<li className="section-dates">{this.props.positionStart} to {this.props.positionEnd}</li>    
    <li className="section-tasks"><ul>{this.props.tasks.map((task)=>{
        return <li>{task}</li>

    })}</ul></li>
    
   
</ul>
<div>
<button type="button" onClick={this.props.editProfessionFn}><Icon path={mdiPencil}
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

export default Profession;