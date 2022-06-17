import React, { Component, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* we have to check if there is a session for this current user and if hes signed in */}
        <Route exact path="/" />
        {/*   */}
      </Switch>
    </Router>
  );
};

export default App;
