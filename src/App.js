import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard/index.js';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
