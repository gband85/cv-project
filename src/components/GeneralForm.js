//import { getSuggestedQuery } from "@testing-library/react";
import React, { Component } from "react";
import '../styles/forms.css'

class GeneralForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            phone:"",
        }
    }
setGeneral=(data)=>{
    this.setState({data})
}
handleChange=(e)=>{
    this.setGeneral({
        [e.target.id]:e.target.value
})
}
render() {
    
  return (

         <form onSubmit={onSubmitGeneral}>
         <div className="input-field">
        <label htmlFor="name" >Name</label>
<input className="" onChange={this.handleChange} value={name} type="text" id="name"/>
</div>
<div className="input-field">
        <label htmlFor="email">Email</label>
<input className=""
    onChange={this.handleChange}
value={email}
type="email"
id="email"
/>
</div>
<div className="input-field">
        <label htmlFor="phone">Phone</label>
<input className="" 
    onChange={this.handleChange}
    value={phone}
    type="number"
    id="phone"
/>
</div>
<div className="btn-group">
<button type='submit'>Save</button>
</div>
</form> 
        
    )
}

}

export default GeneralForm;