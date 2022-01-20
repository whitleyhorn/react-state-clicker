import React, {Component} from 'react';

class StateClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        };
        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber() {
       let number = Math.floor(Math.random() * 10) + 1;
       this.setState({number: number}); 
    }

    render(){
        return(
            <div className="StateClicker">
                <h1 className="StateClicker-title">Number is {this.state.number}</h1>
                { this.state.number !== 7 
                    ? <button className="StateClicker-button" onClick={this.updateNumber}>Random Number</button>
                    : <h3 className="StateClicker-h3">YOU WIN!</h3> 
                }
            </div>
        );
    }
}

export default StateClicker;
