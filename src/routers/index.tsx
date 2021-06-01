import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, BlankLayout } from "layouts";
import { Ask, Jobs, New, Show, Top } from "components";

function Routers() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/new">
          <New />
        </Route>
        <Route path="/show">
          <Show />
        </Route>
        <Route path="/ask">
          <Ask />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="*">
          <BlankLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
