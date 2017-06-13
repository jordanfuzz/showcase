import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: ["Toblerone", "Ants", "Squirtle", "Lemonade", "Magenta", "Tiffany", "Pants"],
            userInput: "",
            filteredArray: []

        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    doFilter(userInput) {
        let newWords = this.state.unfilteredArray.filter(function(word){
            return word.includes(userInput)
        })
        this.setState({
            filteredArray: newWords
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Words: [{this.state.unfilteredArray.join(', ') }]</span>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.doFilter(this.state.userInput)}>Filter!</button>
                <span className="resultsBox  filterStringRB">Filtered words: [{this.state.filteredArray.join(', ')}]</span>
            </div>

        )
    }
}

export default FilterString
    
