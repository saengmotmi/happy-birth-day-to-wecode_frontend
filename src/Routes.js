import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import ModalVote from "components/Modal";
import ArtList from "components/ArtList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/art" component={ArtList} />
          <Route exact path="/modal" component={ModalVote} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
