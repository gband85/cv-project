import React, { Component } from "react";

class ProfessionForm extends Component {
    constructor(props) {
      super(props);
    }

    render() {
const {handleChange,onSubmitProfession,company,position,tasks,positionStart,positionEnd}=this.props
        return (
            <form onSubmit={onSubmitProfession}>
            <label htmlFor="company">Company</label>
           <input className=""
             name="company"
           onChange={handleChange}
           value={company}
           type="text"
           id="company"
           />
                   <label htmlFor="position">Position</label>
           <input className=""
              name='position'
              onChange={handleChange}
              value={position}
             type='text'
             id="position"
           />
                   <label htmlFor="tasks">Tasks</label>
           <textarea className=""
           onChange={handleChange}
           value={tasks}
           id="tasks"
           ></textarea>
           <label htmlFor="positionStart">Start date</label>
           <input className=""
              onChange={handleChange}
              value={positionStart}
             type='date'
             id="positionStart"
           />
                   <label htmlFor="positionEnd">End date</label>
           <input className=""
              onChange={handleChange}
              value={positionEnd}
             type='date'
             id="positionEnd"
           />
           <button type='submit'>Save</button>
            
           </form>
        )
    }
}

export default ProfessionForm;