import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            
 <ul>
      
 <li>{this.props.name}</li>
 <li>{this.props.email}</li>
 <li>{this.props.phone}</li>

            
      </ul>
           
      
)
      }
}

export default General;