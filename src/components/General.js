import React, { Component } from "react";

class General extends Component {
      constructor(props) {
            super(props)
      }
  render() {
    return (
          <div>
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.email}</li>
        <li>{this.props.phone}</li>
        </ul>
      <button type="button" onClick={this.props.editGeneralFn}>Edit</button>
      </div>
    )
    }
}

export default General;
