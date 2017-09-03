import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Welcome from './components/welcome'
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div>
        <Route path='/' component={Welcome}/>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
