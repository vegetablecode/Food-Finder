import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// import { loadUser } from "./actions/authActions"; **NEED THIS?**
import store from "./store";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Front from "./pages/front/Front";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SearchResultPage from "./pages/searchresult/SearchResultPage";
import LoadingPage from "./pages/loading/LoadingPage";

class App extends Component {
  componentDidMount() {
    //store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Front} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/searchResult" component={SearchResultPage} />
              <Route exact path="/loadingPage" component={LoadingPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
