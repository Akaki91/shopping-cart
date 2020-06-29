import React, { Component } from 'react'
import Counter from "./counter"

class Counters extends Component {
    state = {
        counters: [ 
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
        ]
    }

    render () {
        return (
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m2"
                    >Reset</button>
                {this.state.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        counter = { counter }
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}>
                        <h4>Counter #</h4>
                    </Counter>
                    ))}
            </div>
        )
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters})
    }

    handleReset = () => {
        console.log('handle called');
        
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        })
        this.setState( { counters })
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters })
    }
}

export default Counters