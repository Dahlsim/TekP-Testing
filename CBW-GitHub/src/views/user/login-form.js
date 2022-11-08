import React, { Component, useState } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../helpers/IntlMessages";

const LoginForm = ({ onUserLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return (
        <>
            <CardTitle className="mb-4">
                <IntlMessages id="user.login-title" />
            </CardTitle>
            <Form>
                <Label className="form-group has-float-label mb-4">
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <IntlMessages id="user.email" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <IntlMessages
                        id="user.password"
                    />
                </Label>
                <div className="d-flex justify-content-between align-items-center">
                    <NavLink to={`/forgot-password`}>
                        <IntlMessages id="user.forgot-password-question" />
                    </NavLink>
                    <Button
                        color="primary"
                        className="btn-shadow"
                        size="lg"
                        onClick={() => onUserLogin(email, password)}
                    >
                        <IntlMessages id="user.login-button" />
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default LoginForm