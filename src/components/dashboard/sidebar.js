import React from 'react';
import './css/sideBar.css';

class Sidebar extends React.Component {
    goSecurityGroups(){
        window.location.href = "/dashboard/security_groups";
    }
    
    render(){
        return (
            <div className='sideBox'>
                
                <div className='logo'>

                </div>
                <div 
                    className='navElm'
                    onClick={this.goSecurityGroups}>
                    Security Groups
                </div>
            </div>
        )
    }
}

export default Sidebar;