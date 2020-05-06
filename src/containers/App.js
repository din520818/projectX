import '../assets/css/App.css';
import React, { Component } from 'react'
import Home from './Home';
import {ProductProvider} from '../components/ProductContext';

class App extends Component {
  render() {
    return (
        <div>
          <Home/>
        </div>
    );
  }
}

export default App;
