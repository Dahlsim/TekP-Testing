import React, { Component } from "react";
import { Row, Card } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser, updateUserAgreementAsync } from "../../redux/actions";
import { Colxx } from "../../components/common/CustomBootstrap";
import NotificationManager from "../../components/common/react-notifications/NotificationManager";
import LoginForm from './login-form'
import TermsAndConditions from "./termsAndCondition";
import RegisterForm from "./register-form";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false
    }
  }


  onUserLogin(email, password) {
    if (email !== "" && password !== "") {
      this.props.loginUser({ email, password }, this.props.history);
    }
    else {
      NotificationManager.error('Please fill all the field to continue.', null, 2000, null, null, 'filled');
    }
  }

  onAcceptAgreement() {
    this.props.updateUserAgreementAsync(this.props.user.uid, this.props.history)
  }

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>

              {
                !this.state.showRegister ? (
                  <>
                    <p className="white mb-0">Please use your credentials to login.
                    <br />If you are not a member, please{" "}
                      <a onClick={() => this.setState({ showRegister: true })} className="white">register</a>
                    .</p>
                  </>
                ) : (
                    <>
                      <p className="white mb-0">Please use this form to register. <br />
                      If you are a member, please{" "}
                        <a onClick={() => this.setState({ showRegister: false })} className="white">login</a>
                      .</p>
                    </>
                  )
              }

            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>

              {
                this.props.user && !this.props.user.agreementAccepted ? <TermsAndConditions onAcceptAgreement={this.onAcceptAgreement.bind(this)} /> :
                  this.state.showRegister ? <RegisterForm />
                    : <LoginForm onUserLogin={this.onUserLogin.bind(this)} />
              }

            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    loginUser,
    updateUserAgreementAsync
  }
)(Login);
