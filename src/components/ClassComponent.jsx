import { Component } from 'react'

// we're creating a class component to make practise with the react state!

class ClassComponent extends Component {

    state = {
        counter: 0
    }
    // the state is independent, encapsulated and private

    render() {
        // 'this' is the object pointing to the current instance of ClassComponent
        console.log(this.props.name)
        // the render method is MANDATORY in every class component
        return (
            <div>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
                <ol>
                    <li>{this.props.name}</li>
                    <li>Second</li>
                    <li>Third</li>
                </ol>
            </div>
        )
    }
}

export default ClassComponent