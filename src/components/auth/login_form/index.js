import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import { Redirect } from 'react-router-dom';
import UserService from '../../../services/users';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    if (redirectToRegister) return <Redirect to={{ pathname: '/register' }} />;
    if (redirectToNotes) return <Redirect to={{ pathname: '/notes' }} />;

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await UserService.login({ email, password });
            setRedirectToNotes(true);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a
                                            onClick={() =>
                                                setRedirectToRegister(true)
                                            }
                                            className="button is-white has-text-custom-purple"
                                        >
                                            Register or
                                        </a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>
                                            Login
                                        </Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && (
                            <Help color="danger">
                                Email or Password invalid
                            </Help>
                        )}
                    </Column>
                </form>
            </Column.Group>
        </>
    );
}

export default LoginForm;