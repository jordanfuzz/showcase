import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    checkPalindrome(userInput) {
        if(userInput.split('').reverse().join('') === userInput)
            this.setState({ palindrome: "true"})
        else
            this.setState({ palindrome: "false"})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Check!</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>

        )
    }
}

export default Palindrome
    
