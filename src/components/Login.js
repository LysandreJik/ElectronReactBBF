import React from 'react'
import '../css/Login.css';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
    }

    validate(){
        if(document.getElementById("masterpassword").value === "123"){
            this.props.login();
        }
    }

    render(){
        return(
            <div className="login">
                <span>Please enter the BBF master password:</span><br></br>
                <input type="password" id="masterpassword" name="masterpassword"/><br></br>
                <button type="submit" className="bttn-float bttn-md bttn-danger" onClick={this.validate}>ACCESS TO USER NOTIFICATIONS</button>
            </div>
        )
    }
}