import React, { Component } from "react";

class Profession extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        const {company,position,tasks,positionStart,positionEnd,
            handleChange} = this.props;
        return (
            <form>
 <label htmlFor="company">Company</label>
<input className="uh"
  name="company"
onChange={handleChange}
value={company}
type="text"
id="company"
/>
        <label htmlFor="position">Position</label>
<input className="uh"
   name='position'
   onChange={handleChange}
   value={position}
  type='text'
  id="position"
/>
        <label htmlFor="tasks">Tasks</label>
<textarea className="uh"
name='tasks'
onChange={handleChange}
value={tasks}
id="tasks"
></textarea>
<label htmlFor="positionStart">Start date</label>
<input className="uh"
   name='startDate'
   onChange={handleChange}
   value={positionStart}
  type='date'
  id="positionStart"
/>
        <label htmlFor="positionEnd">End date</label>
<input className="uh"
   name='endDate'
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

export default Profession;