import React, {Component} from 'react';
import './App.css';
import './css/bttn.css';
import Login from "./components/Login";
import Notify from "./components/Notify";
import NotifyAllUsers from "./components/NotifyAllUsers";
import SetupNotificationRules from "./components/SetupNotificationRules";

const screens = {
    login: 0,
    notify: 1,
    notifyAllUsers: 2,
    setupNotificationRules: 3
};

class App extends Component {
    constructor(){
        super();

        this.state = {currentScreen: screens.notify};

        this.login = this.login.bind(this);
        this.notifyAllUsers = this.notifyAllUsers.bind(this);
        this.setupNotificationRules = this.setupNotificationRules.bind(this);
    }

    login(){
        console.log("Logged in !");
        this.setState({currentScreen: screens.notify});
    }

    notifyAllUsers(){
        this.setState({currentScreen: screens.notifyAllUsers})
    }

    setupNotificationRules(){
        this.setState({currentScreen: screens.setupNotificationRules})
    }

    render() {
        if(this.state.currentScreen === screens.login){
            return (
                <div className="App">
                    <Login login={this.login}/>
                </div>
            );
        }else if(this.state.currentScreen === screens.notify){
            return (
                <div className="App">
                    <Notify notifyAllUsers={this.notifyAllUsers} setupNotificationRules={this.setupNotificationRules}/>
                </div>
            );
        }else if(this.state.currentScreen === screens.notifyAllUsers){
            return (
                <div className="App">
                    <NotifyAllUsers/>
                </div>
            );
        }else if(this.state.currentScreen === screens.setupNotificationRules){
            return (
                <div className="App">
                    <SetupNotificationRules/>
                </div>
            );
        }

    }
}

export default App;
