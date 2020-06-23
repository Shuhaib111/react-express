import React, { Component } from "react";
import Main from "./components/MainComponent";
import StudentLanding from "./components/StudentComponent";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      //<Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/good" component={StudentLanding} />
        </Switch>
      </BrowserRouter>
      //</Provider>
    );
  }
}
export default App;
