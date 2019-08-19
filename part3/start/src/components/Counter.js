import React, {Component} from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <h1>The Counter</h1>
                <div>
                    <button onClick={this.handleIncrement}>+</button>
                    <span>{this.state.count}</span>
                    <button>-</button>
                </div>
            </div>
        )
    }
}