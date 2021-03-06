import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import { Redirect } from 'react-router-dom';
import UserService from '../../../services/users';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UserService.register({ name, email, password });

            setRedirectToLogin(true);
        } catch (err) {
            setError(true);
        }
    };

    if (redirectToLogin) return <Redirect to={{ pathname: '/login' }} />;

    return (
        <>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Control>
                                <Label size="small">Name:</Label>
                                <Input
                                    type="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    name="name"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Label size="small">E-mail:</Label>
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
                            <Control>
                                <Label size="small">Password:</Label>
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
                                                setRedirectToLogin(true)
                                            }
                                            className="button is-white has-text-custom-purple"
                                        >
                                            Login or
                                        </a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>
                                            Register
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

export default RegisterForm;
