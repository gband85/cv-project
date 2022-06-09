//import { getSuggestedQuery } from "@testing-library/react";
import React, { Component } from "react";
import '../styles/forms.css'

class GeneralForm extends Component {
    constructor(props) {
        super(props);
    }

render() {
    const {onSubmitGeneral,handleChange,name,email,phone}=this.props;
  return (

         <form onSubmit={onSubmitGeneral}>
         <div className="input-field">
        <label htmlFor="name" >Name</label>
<input className="" onChange={handleChange} value={name} type="text" id="name"/>
</div>
<div className="input-field">
        <label htmlFor="email">Email</label>
<input className=""
    onChange={handleChange}
value={email}
type="email"
id="email"
/>
</div>
<div className="input-field">
        <label htmlFor="phone">Phone</label>
<input className="" 
    onChange={handleChange}
    value={phone}
    type="number"
    id="phone"
/>
</div>
<button type='submit'>Save</button>
</form> 
        
    )
}

}

export default GeneralForm;