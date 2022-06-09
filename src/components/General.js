import React, { Component } from "react";
import '../styles/sections.css'
import '../styles/General.css'
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js'; 

class General extends Component {
      constructor(props) {
            super(props)
      }
  render() {
    return (
          <div className="section">
          <div className="section-body">
      <ul>
        <li className="general-title">{this.props.name}</li>
        <li>{this.props.email}</li>
        <li>{this.props.phone}</li>
        </ul>
        <div>
      <button type="button" onClick={this.props.editGeneralFn}>     <Icon path={mdiPencil}
        size={1}
        horizontal
        vertical
        rotate={180}
        />
</button>
      </div>
      </div>
      </div>

    )
    }
}

export default General;
