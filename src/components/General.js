import React, { Component } from "react";
import '../styles/sections.css'

class General extends Component {
      constructor(props) {
            super(props)
      }
  render() {
    return (
          <div className="section">
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.email}</li>
        <li>{this.props.phone}</li>
        </ul>
        <div>
      <button type="button" onClick={this.props.editGeneralFn}>Edit</button>
      </div>
      </div>
    )
    }
}

export default General;
