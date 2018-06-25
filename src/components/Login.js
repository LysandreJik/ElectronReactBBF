import React from 'react'
import '../css/Login.css';

export default class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <span>Please enter the BBF master password:</span><br></br>
                <input type="password" name="masterpassword"/><br></br>
                <button type="submit" className="bttn-float bttn-md bttn-danger">ACCESS TO USER NOTIFICATIONS</button>
            </div>
        )
    }
}