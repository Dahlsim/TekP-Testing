import React, { useState, useEffect } from "react";
import { CardTitle, Form, Label, Input, Button } from "reactstrap";
import * as Utils from '../../helpers/Utils'

import IntlMessages from "../../helpers/IntlMessages";

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [inviter, setInviter] = useState('')
    const [password, setPassword] = useState('')
    const [inviterLock, setInviterLock] = useState(false)

    useEffect(() => {
        const refferal = Utils.getQueryVariable('ref')
        if (refferal) {
            setInviter(refferal)
            setInviterLock(true)
        }
    }, [])

    return (
        <>
            <CardTitle className="mb-4">
                <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
                <Label className="form-group has-float-label mb-4">
                    <Input type="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <IntlMessages id="user.fullname" />
                </Label>
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
                <Label className="form-group has-float-label mb-4">
                    <Input disabled={inviterLock} type="inviter" value={inviter} onChange={(e) => setInviter(e.target.value)} />
                    <IntlMessages
                        id="user.inviter"
                    />
                </Label>
                <div className="d-flex justify-content-end align-items-center">
                    <Button
                        color="primary"
                        className="btn-shadow"
                        size="lg"
                        onClick={() => this.onUserRegister()}
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default RegisterForm;