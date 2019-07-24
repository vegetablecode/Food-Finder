import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchResult from "../../components/searchResult/SearchResult";

class SearchResultPage extends Component {
  render() {
    return (
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <SearchResult />
      </div>
    );
  }
}

export default withRouter(SearchResultPage);
