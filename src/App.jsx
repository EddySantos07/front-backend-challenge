import React, { Component, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import home from "./components/home/home";
import PersistentDrawerRight from "./components/home/home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home}/>
        {/*   */}
      </Switch>
    </Router>
  );
};

export default App;
