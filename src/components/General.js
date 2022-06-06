//import { getSuggestedQuery } from "@testing-library/react";
import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);
        // this.state={
        // //    resume: {
        //    name: "",
        //    email: "",
        //    phone: "",
        // //    },
        // };
      //  this.handleChange=this.handleChange.bind(this);
    }



render() {
     const { name,email,phone,handleChange }={...this.props};
    // const {handleChange}=this.props;
    return (

         <form>
        <label htmlFor="name">Name</label>
<input
name="name"
    className="uh" 
    onChange={handleChange}
value={name}
type="text"
id="name"
/>
        <label htmlFor="email">Email</label>
<input className="uh"
    onChange={handleChange}
value={email}
type="email"
id="email"
/>
        <label htmlFor="phone">Phone</label>
<input className="uh" 
    onChange={handleChange}
    value={phone}
    type="number"
    id="phone"
/>
</form> 
        
    )
}

}

export default General;