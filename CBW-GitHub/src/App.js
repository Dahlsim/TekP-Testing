import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./helpers/Firebase";
import AppLocale from "./lang";
import ColorSwitcher from "./components/common/ColorSwitcher";
import NotificationContainer from "./components/common/react-notifications/NotificationContainer";
import { isMultiColorActive } from "./constants/defaultValues";
import main from "./views";
import app from "./views/app";
import user from "./views/user";
import error from "./views/error";

const AuthRoute = ({ component: Component, wheel, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser && authUser.agreementAccepted ?
        wheel.selectedWheel ? (
          <Component {...props} />
        )
          : wheel.isLoading ? null
            : <div><p>Please select a wheel to continue</p></div>
        : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class App extends Component {
  render() {
    const { locale, loginUser, wheel } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer enterTimeout={2000} />
            {isMultiColorActive && <ColorSwitcher />}
            <Router>
              <Switch>
                <AuthRoute path="/app" authUser={loginUser} component={app} wheel={wheel} />
                <Route path="/user" component={user} />
                <Route path="/error" exact component={error} />
                <Route path="/" exact component={main} />
                <Redirect to="/error" />
              </Switch>
            </Router>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, settings, wheel }) => {
  const { user: loginUser } = authUser;
  const { locale } = settings;
  return { loginUser, locale, wheel };
};
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
