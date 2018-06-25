import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={"password"}>
                    <span>Please enter the BBF master password</span>
                    <input type="password"/>
                </div>
            </div>
        );
    }
}

export default App;
