import React from 'react';
import './css/security_groups.css';

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

    render(){
        return(
            <div className='container'>
                <div className='header'>
                    <h1 className='title'>Security Groups</h1>
                </div>
                <div className='securityGroupContainer'>
                    <Group id='1234' alias='My Group'/>
                </div>
            </div>
        )
    }
}

export default SecurityGroups;