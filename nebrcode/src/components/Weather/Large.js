import React, { Component } from "react";

class Large extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dt: "timestamp",
            weather: [
                {description: "desc"}
            ],
            temp: {max: 0, min: 0},
            speed: "0",
            deg: "0"
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState(props);
    }

    render() {
        let windDirection = {
            transform: `rotate(${this.state.deg-180}deg)`
        };

        return (
            <div>
                <h2>Current Weather is {this.state.weather[0].description}</h2>
                <hr width="80%" />
                <div className="row-2">
                    <div className="col">
                        Maximum: {this.state.temp.max} <br/>
                        Minimum: {this.state.temp.min}
                    </div>
                    <div className="col">
                        {this.state.speed} km/hr<br/>
                        <p style={windDirection}>V</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Large;