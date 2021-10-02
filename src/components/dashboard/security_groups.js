import React from 'react';
import './css/security_groups.css';
import axios from 'axios';
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

class Group extends React.Component {
    render() {
        return (
            <div className='securityGroupElm'>
                <a href={"/dashboard/security_groups/" + this.props.id} className="column">
                    {this.props.id}
                </a>
                <div className="column">
                    {this.props.alias}
                </div>
            </div>
        )
    }
}
class SecurityGroups extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(){
        super();
        this.state = {
            "groups": []
        }
    }

    componentDidMount() {
        axios.get("https://josephscalera.com/api/security_groups").then(function(response) {
            console.log(response);
            var groups = [];
            response.array.forEach(element => {
                groups.push(<Group id={element.id} alias={element.alias}/>)
            });
            this.setState({"groups": groups});
        }.bind(this)).catch(function(err) {
            const response = err;
            console.log(response);
        })
    }

    handleUnauthorized(){

    }
    render(){
        return(
            <div className='container'>
                <div className='header'>
                    <h1 className='title'>Security Groups</h1>
                </div>
                <div className='securityGroupContainer'>
                    {this.state.groups}
                </div>
            </div>
        )
    }
}

export default withCookies(SecurityGroups);