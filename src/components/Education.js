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
            {/*In schools array, for each item,iterate over properties and return p element with property*/}
            {this.props.schools.map(function(school){
            return   <li> {Object.values(school).map((i)=>{
                    return <p>{i}</p>
                })}<button type="button" ><Icon path={mdiPencil}
        size={1}
        horizontal
        vertical
        rotate={180}
        /></button></li>
            })}
                {/* <li className="section-position">{this.props.schoolDegree}</li>
                <li className="section-place">{this.props.schoolName} - {this.props.schoolLocation}</li>
                <li className="section-dates">{this.props.schoolStart} to {this.props.schoolEnd}</li> */}
                            </ul>
            <div>
                
            </div>            
            </div>
            </div>
        )
    }
}

export default Education;