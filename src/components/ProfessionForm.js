import React, { Component } from "react";

class ProfessionForm extends Component {
    constructor(props) {
      super(props);
    }

    render() {
const {handleChange,onSubmitProfession,company,position,tasks,positionStart,positionEnd}=this.props
        return (
            <form onSubmit={onSubmitProfession}>
            <div>
            <label htmlFor="company">Company</label>
           <input className="input-field"
             name="company"
           onChange={handleChange}
           value={company}
           type="text"
           id="company"
           />
</div>
<div className="input-field">
                   <label htmlFor="position">Position</label>
           <input
              name='position'
              onChange={handleChange}
              value={position}
             type='text'
             id="position"
           />
           </div>
           <div className="input-field">
                   <label htmlFor="tasks">Tasks</label>
           <textarea
           onChange={handleChange}
           value={tasks}
           id="tasks"
           ></textarea>
           </div>
           <div className="input-field">
           <label htmlFor="positionStart">Start date</label>
           <input
              onChange={handleChange}
              value={positionStart}
             type='date'
             id="positionStart"
           />
           </div>
           <div className="input-field">
                   <label htmlFor="positionEnd">End date</label>
           <input
              onChange={handleChange}
              value={positionEnd}
             type='date'
             id="positionEnd"
           />
           </div>
           <div className="btn-group">
           <button type='submit'>Save</button>
            </div>
           </form>
        )
    }
}

export default ProfessionForm;