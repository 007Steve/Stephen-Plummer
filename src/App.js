import React from "react";
import "./App.css";
import HomePage from "./HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import About from "./About";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/projects/:id" component={ProjectPage}></Route>
          <Route exact path="/about" component={About}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
