import React, { Component } from "react";
import store from "../../utils/store";
import { getWeatherData } from "../../utils/weatherAPI";

export default class CityForm extends Component {
    constructor(props) {
        super(props);

        this.state = store.getGlobalState();

        this.handleChange = this.handleChange.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState () {
        this.setState(store.getGlobalState);
    }

    UNSAFE_componentWillMount() {
        store.subscribe(this.updateState);
    }

    componentWillUnmount() {
        store.unsubscribe(this.updateState);
    }

    handleChange(e) {
        store.updateGlobalState({searchTerm: e.target.value});
        this.setState({searchTerm: e.target.value});
    }

    handleClick() {
        getWeatherData();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Search</button>
            </div>
        )
    }
}