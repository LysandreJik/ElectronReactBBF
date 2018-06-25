import React from 'react'

import '../css/NotifyAllUsers.css'

export default class NotifyAllUsers extends React.Component{

    notify(){
        console.log("Sending notification ...");
    }

    render(){
        return(
            <div className="animated fadeIn notify-all-users">
                <span>Notify all users. Number of users that will receive a push notification : 0.</span>
                <br></br>
                <input type="text"/>
                <br></br>
                <button className="bttn-float bttn-md bttn-danger" onClick={this.notify}>Notify !</button>
            </div>
        )
    }
}

