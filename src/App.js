import './App.css';
import React, { Component } from 'react';
import General from './components/General';
import Profession from './components/Profession';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();
  }
  render() {
  return (
<div>
<General/>
<Profession />
</div>
  );
}
}

export default App;
