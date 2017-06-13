import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    assignEvenAndOdds(input) {
        var evens = []
        var odds = []
        input = input.split('')
        input.forEach(function(element) {
            if(element % 2 === 0)
                evens.push(element)
            else
                odds.push(element)
        })
        this.setState({
            evenArray: evens.join(', '),
            oddArray: odds.join(', ')
        })
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.assignEvenAndOdds(this.state.userInput)}>Split!</button>
                <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
            </div>

        )
    }
}

export default EvenAndOdd

