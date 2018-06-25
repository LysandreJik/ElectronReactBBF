import React from 'react'

import '../css/SetupNotificationRules.css'
import RuleController from "../controller/RuleController";

export default class NotifyAllUsers extends React.Component {

    notify() {
        console.log("Sending notification ...");
    }

    render() {
        return (
            <div className="animated fadeIn setup-notification-rules">
                <br></br>
                <br></br>
                <br></br>
                <span>Setting up notification rules. Please let the wizard guide you through this setup.</span>
                <br></br>
                <br></br>
                <br></br>
                <Wizard/>
            </div>
        )
    }
}

const ruleStates = {
    nothingSelected: 0,
    addingRule: 1,
    removingRule: 2
};

class Wizard extends React.Component {
    constructor(props){
        super(props);

        this.state = {current: ruleStates.nothingSelected};

        this.reinit = this.reinit.bind(this);
        this.addRule = this.addRule.bind(this);
        this.removeRule = this.removeRule.bind(this);

        this.controller = new RuleController();
    }

    reinit(){
        this.setState({current: ruleStates.nothingSelected});
    }

    addRule(){
        this.setState({current: ruleStates.addingRule});
    }

    removeRule(){
        this.setState({current: ruleStates.removingRule});
    }

    render() {
        if(this.state.current === ruleStates.nothingSelected){
            return (
                <div>
                    <button style={{marginRight: "10px"}} className="animated fadeIn bttn-float bttn-md bttn-danger" onClick={this.addRule}>Add a rule</button>
                    <button style={{marginLeft: "10px"}} className="animated fadeIn bttn-float bttn-md bttn-danger" onClick={this.removeRule}>Remove a rule</button>
                </div>
            );
        }else if(this.state.current === ruleStates.addingRule){
            return (
                <div>
                    <span>Adding rule</span>
                    <br></br>
                    <AddRule validate={this.controller.addRule}/>
                    <br></br>
                    <button className="animated fadeIn bttn-float bttn-md bttn-danger" onClick={this.reinit}>Cancel</button>
                </div>
            );
        }else if(this.state.current === ruleStates.removingRule){
            return (
                <div>
                    <span>Current rules :</span>


                    <Rules/>


                    <br></br>
                    <br></br>
                    <br/>
                    <button className="animated fadeIn bttn-float bttn-md bttn-danger" onClick={this.reinit}>Cancel</button>
                </div>
            );
        }

    }
}

class AddRule extends React.Component{
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
    }

    availableStates = {
        init: 0,
        allBots: 1,
        chooseBot: 2
    };

    state = {current: this.availableStates.init};

    validate(alertState, value){
        this.props.validate(this.state.current, alertState, value);
    }

    render(){
        if(this.state.current === this.availableStates.init){
            return(
                <div>
                    <br></br>
                    <button onClick={() => this.setState({current:this.availableStates.allBots})} style={{marginRight: "20px"}} className="animated fadeIn bttn-float bttn-md bttn-danger">ALL BOTS</button>
                    <button onClick={() => this.setState({current:this.availableStates.chooseBot})} className="animated fadeIn bttn-float bttn-md bttn-danger">CHOOSE A BOT</button>
                </div>
            );
        }else if(this.state.current === this.availableStates.allBots){
            return(
                <div>
                    <span className={"animated fadeIn"}>To all bots</span>
                    <br/>
                    <br/>

                    <SetAlerts validate={this.validate}/>
                </div>
            );
        }else if(this.state.current === this.availableStates.chooseBot){
            return(
                <div>
                    <span className={"animated fadeIn"}>To some bots</span>
                </div>
            );
        }
    }
}

class SetAlerts extends React.Component{
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
    }


    availableStates = {
        init: 0,
        position: 1,
        level: 2,
        kamas: 3
    };

    state = {current: this.availableStates.init};

    validate(value){
        this.props.validate(this.state.current, value);
    }

    render(){
        if(this.state.current === this.availableStates.init){
            return(
                <div>
                    <span>Concerning the field :</span>
                    <br/>
                    <button onClick={() => this.setState({current:this.availableStates.position})} style={{marginRight: "20px"}} className="animated fadeIn bttn-float bttn-md bttn-danger">POSITION</button>
                    <button onClick={() => this.setState({current:this.availableStates.level})} style={{marginRight: "20px"}} className="animated fadeIn bttn-float bttn-md bttn-danger">LEVEL</button>
                    <button onClick={() => this.setState({current:this.availableStates.kamas})} style={{marginRight: "20px"}} className="animated fadeIn bttn-float bttn-md bttn-danger">KAMAS</button>
                </div>
            );
        }else if(this.state.current === this.availableStates.position){
            return(
                <div>
                    <PositionAlert validate={this.validate}/>
                </div>
            );
        }else if(this.state.current === this.availableStates.level){
            return(
                <div>
                    <LevelAlert validate={this.validate}/>
                </div>
            );
        }else if(this.state.current === this.availableStates.kamas){
            return(
                <div>
                    <KamasAlert validate={this.validate}/>
                </div>
            );
        }
    }
}

class PositionAlert extends React.Component{
    render(){
        return(
            <div className="alert">
                <span>Get an alert when the bot reaches position :</span>
                <input id="position-alert-textfield" type="text" defaultValue="[0,0]"/>
                <br/>
                <br/>
                <button onClick={() => this.props.validate(document.getElementById("position-alert-textfield").value)} className="animated fadeIn bttn-float bttn-md bttn-danger">ADD RULE</button>
            </div>
        );
    }
}

class LevelAlert extends React.Component{
    render(){
        return(
            <div className="alert">
                <span>Get an alert when the bot reaches level :</span>
                <input id="level-alert-textfield" type="text" defaultValue="200"/>
                <br/>
                <br/>
                <button onClick={() => this.props.validate(document.getElementById("level-alert-textfield").value)} className="animated fadeIn bttn-float bttn-md bttn-danger">ADD RULE</button>
            </div>
        );
    }
}

class KamasAlert extends React.Component{
    render(){
        return(
            <div className="alert">
                <span>Get an alert when the bot reaches has reached :</span>
                <input id="kamas-alert-textfield" type="text" defaultValue="0"/>
                <span>kamas.</span>
                <br/>
                <br/>
                <button onClick={() => this.props.validate(document.getElementById("kamas-alert-textfield").value)} className="animated fadeIn bttn-float bttn-md bttn-danger">ADD RULE</button>
            </div>
        );
    }
}

class Rules extends React.Component{
    render(){
        return(
            <div className="setup-notification-rules-rules">
                There doesn't seem to be any rule implemented.
            </div>
        );
    }
}