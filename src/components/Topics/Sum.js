import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    changeNumber1(val) {
        this.setState({
            number1: val
        })
    }

    changeNumber2(val) {
        this.setState({
            number2: val
        })
    }

    doSum(num1, num2) {
        this.setState({
            sum: parseInt(num1) + parseInt(num2)
        })
    }
    

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" onChange={(e) => this.changeNumber1(e.target.value)}/>
                <input type="text" className="inputLine" onChange={(e) => this.changeNumber2(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.doSum(this.state.number1, this.state.number2)}>Add!</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>

        )
    }
}

export default Sum
    
