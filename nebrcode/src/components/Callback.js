import React, { Component } from "react";
import { handleAuth } from "../utils/auth";
import { withRouter } from "react-router-dom";

class Callback extends Component {
  UNSAFE_componentWillMount() {
    handleAuth(() => {
      this.props.history.push("/weather");
    });
  }

  render() {
    return (
      <div>Reticulating splines...</div>
    )
  }
}

export default withRouter(Callback);