import React from 'react';
import {
    Column,
    Section,
    Title,
    Container,
    Card,
    Input,
    Field,
    Label,
    Control,
    Help,
    Button,
} from 'rbx';
import HeaderLogged from '../../../components/header_logged';
import UserService from '../../../services/users';

const UserEdit = () => {
    const [email, setEmail] = React.useState('');
    const [invalidPassword, setInvalidPassword] = React.useState(false);
    const [emailInvalid, setEmailInvalid] = React.useState(false);
    const [status, setStatus] = React.useState(null);
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordVerify, setPasswordVerify] = React.useState('');

    const updatePersonalData = async () => {
        const validateEmail = /\S+@\S+\.\S+/;

        if (!validateEmail.test(email)) {
            setEmailInvalid(true);
            return;
        }

        setEmailInvalid(false);

        try {
            await UserService.updateUser({ email, name });
            setStatus('success');
        } catch (err) {
            setStatus('error');
        }
    };

    const updatePasswordData = async () => {
        if (password !== passwordVerify) {
            setInvalidPassword(true);
            return;
        }

        setInvalidPassword(false);

        try {
            await UserService.updatePassword({ password });
            setStatus('success_password');
        } catch (err) {
            setStatus('error_password');
        }
    };

    return (
        <>
            <HeaderLogged />
            <Section size="medium" className="users">
                <Container>
                    <Column.Group centered className="users-edit">
                        <Column size={4}>
                            <Title
                                size={5}
                                className="has-text-grey has-text-left"
                            >
                                Informações Pessoais
                            </Title>
                            <Card>
                                <Card.Content>
                                    <Field>
                                        <Label size="small">Nome:</Label>
                                        <Control>
                                            <Input
                                                type="text"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                                name="name"
                                            />
                                        </Control>
                                    </Field>
                                    <Field>
                                        <Label size="small">Email:</Label>
                                        <Control>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                                name="email"
                                            />
                                        </Control>
                                        {emailInvalid && (
                                            <Help color="danger">
                                                E-mail inválido
                                            </Help>
                                        )}
                                    </Field>
                                    <Field>
                                        <Control>
                                            <Column.Group>
                                                <Column className="has-text-right">
                                                    <Button
                                                        color="custom-purple"
                                                        outlined
                                                        onClick={
                                                            updatePersonalData
                                                        }
                                                    >
                                                        Atualizar
                                                    </Button>
                                                </Column>
                                            </Column.Group>
                                        </Control>
                                    </Field>
                                    {status === 'error' && (
                                        <Help color="danger">
                                            Problem in update
                                        </Help>
                                    )}
                                    {status === 'success' && (
                                        <Help color="primary">
                                            Updated with success
                                        </Help>
                                    )}
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>

                    <Column.Group centered className="users-edit">
                        <Column size={4}>
                            <Title
                                size={5}
                                className="has-text-grey has-text-left"
                            >
                                Password
                            </Title>
                            <Card>
                                <Card.Content>
                                    <Field>
                                        <Label size="small">Senha:</Label>
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
                                        {invalidPassword && (
                                            <Help color="danger">
                                                Senha não confere
                                            </Help>
                                        )}
                                    </Field>

                                    <Field>
                                        <Label size="small">
                                            Confirme a Senha:
                                        </Label>
                                        <Control>
                                            <Input
                                                type="password"
                                                value={passwordVerify}
                                                onChange={(e) =>
                                                    setPasswordVerify(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                name="passwordVerify"
                                            />
                                        </Control>
                                        {invalidPassword && (
                                            <Help color="danger">
                                                Senha não confere
                                            </Help>
                                        )}
                                    </Field>
                                    <Field>
                                        <Control>
                                            <Column.Group>
                                                <Column className="has-text-right">
                                                    <Button
                                                        color="custom-purple"
                                                        outlined
                                                        onClick={
                                                            updatePasswordData
                                                        }
                                                    >
                                                        Atualizar
                                                    </Button>
                                                </Column>
                                            </Column.Group>
                                        </Control>
                                    </Field>
                                    {status === 'error_password' && (
                                        <Help color="danger">
                                            Problem in update
                                        </Help>
                                    )}
                                    {status === 'success_password' && (
                                        <Help color="primary">
                                            Updated with success
                                        </Help>
                                    )}
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    <Column.Group centered>
                        <Column size={4} className="has-text-right">
                            Users Delete Button...
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </>
    );
};
export default UserEdit;
