import React, { Component } from "react";
import "../styles/sections.css";
import "../styles/General.css";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

class General extends Component {
  constructor(props) {
    super(props);
    this.state={
      editMode: false,
      newGeneral:{
        name:"",
        email:"",
        phone:"",
      }
    }
  }

  render() {
   const editTemplate=(
      <form >
         <div className="input-field">
        <label htmlFor="name" >Name</label>
<input className="" onChange={this.handleChange} value={this.state.newGeneral.name} type="text" id="name"/>
</div>
<div className="input-field">
        <label htmlFor="email">Email</label>
<input className=""
    onChange={this.handleChange}
value={this.state.newGeneral.email}
type="email"
id="email"
/>
</div>
<div className="input-field">
        <label htmlFor="phone">Phone</label>
<input className="" 
    onChange={this.handleChange}
    value={this.state.newGeneral.phone}
    type="number"
    id="phone"
/>
</div>
<div className="btn-group">
<button type='submit'>Save</button>
</div>
</form> 
    )
    const viewTemplate=(
      <li className="section-body">
     
        <p className="general-title">{this.props.general.name}</p>
        <p>{this.props.general.email}</p>
        <p>{this.props.general.phone}</p>
      
      
        <button type="button" onClick={this.props.editGeneralFn}>
          <Icon
            path={mdiPencil}
            size={1}
            horizontal
            vertical
            rotate={180}
          />
        </button>
      
    </li>
    )
   
if (this.state.editMode) {
  return editTemplate
}
else {
  return viewTemplate
}
    
  }
}

export default General;
