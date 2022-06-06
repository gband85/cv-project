import './styles/App.css';
import React, { Component } from 'react';
import General from './components/General';
import Profession from './components/Profession';
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      //  resume: {
        name: "",
        email: "",
        phone: "",
        schoolName:"",
        schoolSubject:"",
        schoolStart:"",
        schoolEnd:"",
        company: "",
        position: "",
        tasks: "",
        positionStart: "",
        positionEnd: "",
   data:[],
   }
  this.handleChange=this.handleChange.bind(this);
}

  handleChange=(e)=>{
    this.setState({
     //   resume: {
            [e.target.name]: e.target.value,
       // }
    });
};
// onSubmitTask = (e) => {
//   e.preventDefault();
//   this.setState({
// data: this.state.data.concat(this.state.name,this.state.email)
//   })
// };
  render() {
    // const {name,email,phone,company,position,tasks,startDate,endDate,data}  = this.state;
  return (
    <div>
<General handleChange={this.handleChange}/>
<Profession handleChange={this.handleChange}/>
    </div>
  );
}
}

export default App;
