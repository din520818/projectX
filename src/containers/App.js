import '../assets/css/App.css';
import React, { Component } from 'react'
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router';
import Sales from '../components/SalesPage';
import AppBar from '../components/AppBar';
import Purchases from '../components/PurchasesPage';
import Reports from '../components/Reports';
import Inventory from '../components/Inventory';
import Login from '../components/Login';

class App extends Component {
  render() {
    return (
      <div>
          
        <AppBar/>
        <Switch>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/purchases">
            <Purchases />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
