import React from 'react'
import './index.css';
import MyField from './input';
import Button from '@mui/material/Button';
import axios from 'axios';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(){
        super();
        this.username = "";
        this.password = "";
        this.state = {
            "error": ""
        }
        
    }

    handleChangeUsername(event){
        this.username = event.target.value;
    }

    handleChangePassword(event){
        this.password = event.target.value;
    }

    submit(){

        axios.post("http://192.168.1.111:2000/api/login", {
            "username": this.username,
            "password": this.password
        }).then(function(response) {
            const { cookies } = this.props;
            cookies.set('jwt', response.data.jwt);
        }.bind(this)).catch(function(err) {
            this.setState({
                "error": <h1 className='error'>Incorrect username or password.</h1>
            });
            console.log(err);
        }.bind(this))
    }

    handleKey(event){
        if (event.key === 'Enter') {
            this.submit().bind(this);
            event.preventDefault();
        }
    }

    render(){
        return (
            <div className='form'>
                <h1 className='Title'>Login</h1>
                <div className='inputbox' >
                    <MyField label="Username" onChange={this.handleChangeUsername.bind(this)} onKeyDown={this.handleKey.bind(this)}/>
                    <MyField label="Password" type="password" onChange={this.handleChangePassword.bind(this)} onKeyDown={this.handleKey.bind(this)}/>
                    {this.state.error}
                    <div className="buttonContainer">
                        <Button variant="outlined" size="medium" className="button" sx={{marginLeft: '150px', marginTop: '10px', width: '100px'}} onClick={this.submit.bind(this)}>
                            Login
                        </Button>
                        <Button variant="contained" size="medium" className="button" sx={{marginLeft: '15px', marginTop: '10px', width: '100px'}}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withCookies(Login);