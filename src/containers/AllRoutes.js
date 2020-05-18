import React from 'react'
import Home from './Home';
import {Switch, Route} from 'react-router';
import Sales from '../components/SalesPage';

export default function AllRoutes() {
    return (
    <div>
        <Switch>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>  
    );
  }
