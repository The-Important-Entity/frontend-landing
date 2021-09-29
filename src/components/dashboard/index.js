import React from 'react';
import Sidebar from './sidebar';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SecurityGroup from './security_groups';

class Dashboard extends React.Component {

    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/dashboard/security_groups' component={SecurityGroup}/>
                    </Switch>
                </Router>
                <Sidebar />
            </div>
        )
    }
}

export default Dashboard;