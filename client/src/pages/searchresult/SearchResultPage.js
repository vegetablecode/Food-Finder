import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchResult from "../../components/searchResult/SearchResult";

class SearchResultPage extends Component {
  render() {
    return (
      <div>
        search result page
        <SearchResult />
      </div>
    );
  }
}

export default withRouter(SearchResultPage);
