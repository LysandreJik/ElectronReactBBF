import React from 'react'
import '../css/Notify.css';

export default class Notify extends React.Component{
    render(){
        return(
            <div className="notify">
                <button className="bttn-float bttn-md bttn-danger" onClick={this.props.notifyAllUsers}>NOTIFY ALL USERS</button>
                <br></br>
                <br></br>
                <br></br>
                <button className="bttn-float bttn-md bttn-danger" onClick={this.props.setupNotificationRules}>setup RULES FOR NOTIFICATIONS</button>
            </div>
        )
    }
}