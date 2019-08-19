import React, { Component } from "react";

class Small extends Component {
    render() {
        let dayOfWeek = (dt) => {
            let d = new Date(dt * 1000);
            return d.toLocaleDateString(window.navigator.language, {weekday: 'long'});
        };
        
        let day = dayOfWeek(this.props.dt);
    
        return(
        <div className="col center border">
            Weather for {day} <br/>
            {this.props.temp.max} F / {this.props.temp.min} F
        </div>
        )
    }
}

export default Small;