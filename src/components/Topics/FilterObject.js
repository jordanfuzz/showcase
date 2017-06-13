import React, {Component} from 'react';

class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO'
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    doFilter(userInput) {
        let newEmployees = this.state.employees.filter(function(employee) {
            return employee.hasOwnProperty(userInput)
        })
        this.setState({
            filteredEmployees: newEmployees
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.employees) }</span>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.doFilter(this.state.userInput)}>Filter!</button>
                <span className="resultsBox  filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees)}</span>
            </div>
        )
    }
}

export default FilterObject
    
