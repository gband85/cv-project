import React, { Component } from "react";

class ProfessionForm extends Component {
    constructor(props) {
      super(props);
    }

    render() {
const {job,handleProfessionChange,onSubmitProfession,company,position,tasks,positionStart,positionEnd}=this.props
        return (
            <form onSubmit={onSubmitProfession}>
            <div className="input-field">
            <label htmlFor="company">Company</label>
           <input
             name="company"
           onChange={handleProfessionChange}
           value={job.company}
           type="text"
           id="company"
           />
</div>
<div className="input-field">
                   <label htmlFor="position">Position</label>
           <input
              name='position'
              onChange={handleProfessionChange}
              value={job.position}
             type='text'
             id="position"
           />
           </div>
           <div className="input-field">
                   <label htmlFor="tasks">Tasks</label>
           <textarea
           onChange={handleProfessionChange}
           value={job.tasks}
           id="tasks"
           ></textarea>
           </div>
           <div className="input-field">
           <label htmlFor="positionStart">Start date</label>
           <input
              onChange={handleProfessionChange}
              value={job.positionStart}
             type='date'
             id="positionStart"
           />
           </div>
           <div className="input-field">
                   <label htmlFor="positionEnd">End date</label>
           <input
              onChange={handleProfessionChange}
              value={job.positionEnd}
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