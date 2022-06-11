import React, { Component } from "react";
import '../styles/sections.css'
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js'; 
import School from './School';

class Education extends Component {
  
    render() {
        const {editEducationFn}=this.props;
        return (
            <div className="section">
            <p className="section-title">Education</p>
<div className="section-body">
            <ul>

            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.props.schools.map((school)=>{
            return   <School {...school}/>
                
            
            })}

                            </ul>
            <div>
                
            </div>            
            </div>
            </div>
        )
    }
}

export default Education;