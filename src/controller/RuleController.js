


export default class RuleController{

    botSelectionStates = {
        init: 0,
        allBots: 1,
        chooseBot: 2
    };

    alertStates = {
        init: 0,
        position: 1,
        level: 2,
        kamas: 3
    };

    addRule(botSelection, alertState, value){
        console.log(botSelection, alertState, value);
    }

    removeRule(){

    }

}