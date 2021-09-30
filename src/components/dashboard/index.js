import React from 'react';
import Sidebar from './sidebar';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SecurityGroup from './security_groups';
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

class Dashboard extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    handleCookie(){
        const { cookies } = this.props;
        if(!cookies.get('jwt')) {
            window.location.href = "/login";
        };
    }

    render(){
        this.handleCookie();
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

export default withCookies(Dashboard);