import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/loader/Loader";

class LoadingPage extends Component {
  render() {
    return <Loader />;
  }
}

export default withRouter(LoadingPage);
