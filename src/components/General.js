import React, { Component, useState } from "react";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";
import {validate} from "./validate";

const General = (props) => {

  const [editMode, setEditMode]=useState(false);
  const [newGeneral, setNewGeneral]=useState({
    name:"",
    email:"",
    phone:"",
  });
  const [errors,setErrors]=useState([]);
const handleChange=(e)=>{
  setNewGeneral({
    ...newGeneral,
    [e.target.id]:e.target.value
  })
}
const handleSubmit=(e)=>{
  setErrors([]);
  e.preventDefault();
  const errors=validate(newGeneral.name,newGeneral.email,newGeneral.phone);
  if (errors.length>0) {
    setErrors(errors);
  return;  
}
  props.editGeneral(newGeneral);
  setEditMode(false);
}
  let template;
   const editTemplate=(
    <div>
      <form onSubmit={handleSubmit} noValidate>
         <div className="input-field">
        <label htmlFor="name">Name</label>
<input className="" onChange={handleChange} value={newGeneral.name} type="text" id="name"/>
</div>
<div className="input-field">
        <label htmlFor="email">Email</label>
<input className=""
    onChange={handleChange}
value={newGeneral.email}
type="email"
id="email"
/>
</div>
<div className="input-field">
        <label htmlFor="phone">Phone</label>
<input className="" 
    onChange={handleChange}
    value={newGeneral.phone}
    type="string"
    id="phone"
/>
</div>
<div className="btn--group">
<button type='submit' className="btn btn--save">Save</button>
<button type='button' className="btn btn--cancel" onClick={()=>setEditMode(false)}>Cancel</button>
</div>
</form> 
    <div className="errors">
    
    {errors.map((error)=>
<p>{error}</p>
    )}
  </div>
</div>
    )
    const viewTemplate=(
      <div className="section__item--data">
     <div>
        <p className="section__title general">{props.general.name}</p>
        <p>{props.general.email}</p>
        <p>{props.general.phone}</p>
      </div>
      <div>
        <button type="button" className="btn btn--icon" onClick={()=>{
          setEditMode(true)
          setNewGeneral(props.general)
        }}>
          <Icon
            path={mdiPencil}
            size={1}
            horizontal
            vertical
            rotate={180}
          />
        </button>
      </div>
    </div>
    )
   
if (editMode) {
  template= editTemplate;
}
else {
  template= viewTemplate;
}
    
return (<li className='section-item'>
  {template}
</li>)
}

export default General;
