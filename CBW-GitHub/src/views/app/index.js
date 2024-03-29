import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";
import gogo from "./gogo";
import secondMenu from "./second-menu";
import blankPage from "./blank-page";
import GettingStarted from "./getting-started";
import MyWheel from "./my-wheel";

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/my-wheel`} />
          <Route path={`${match.url}/my-wheel`} component={MyWheel} />
          <Route path={`${match.url}/getting-started`} component={GettingStarted} />
          <Route path={`${match.url}/welcome`} component={gogo} />
          <Route path={`${match.url}/second-menu`} component={secondMenu} />
          <Route path={`${match.url}/blank-page`} component={blankPage} />
          <Redirect to="/error" />
        </Switch>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
