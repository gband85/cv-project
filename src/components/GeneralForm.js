//import { getSuggestedQuery } from "@testing-library/react";
import React, { Component } from "react";

class GeneralForm extends Component {
    constructor(props) {
        super(props);
    }

render() {
    const {onSubmitGeneral,handleChange,name,email,phone}=this.props;
  return (

         <form onSubmit={onSubmitGeneral}>
        <label htmlFor="name">Name</label>
<input className="" onChange={handleChange} value={name} type="text" id="name"/>
        <label htmlFor="email">Email</label>
<input className=""
    onChange={handleChange}
value={email}
type="email"
id="email"
/>
        <label htmlFor="phone">Phone</label>
<input className="" 
    onChange={handleChange}
    value={phone}
    type="number"
    id="phone"
/>
<button type='submit'>Save</button>
</form> 
        
    )
}

}

export default GeneralForm;