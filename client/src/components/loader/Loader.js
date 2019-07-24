import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Spin, Icon, Typography } from "antd";

import { getRecipes } from "../../actions/searchActions";

import "./Loader.css";

const { Title } = Typography;

class Loader extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  static propTypes = {
    getRecipes: PropTypes.func.isRequired
  };

  componentDidMount() {
    this._isMounted = true;
    this._isMounted &&
      this.props.getRecipes(this.props.products, this.props.history);
  }

  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
    return (
      <div className="loader">
        <div className="loader-element">
          <Title level={2}>Searching for recipes...</Title>
          <Spin indicator={antIcon} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.search.products
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(withRouter(Loader));
