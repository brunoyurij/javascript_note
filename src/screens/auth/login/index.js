import React, { Fragment } from 'react';
import { Section, Container, Column, Card, Title } from 'rbx';
import Header from '../../../components/header';
import '../../../styles/auth.scss';
import LogoImage from '../../../assets/images/logo.png';
import LoginForm from '../../../components/auth/login_form';

const LoginScreen = () => (
    <>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={LogoImage} alt="Logo" />
                                        </Column>
                                    </Column.Group>

                                    <Column.Group>
                                        <Column size={12}>
                                            <Title
                                                size={6}
                                                className="has-text-grey has-text-centered"
                                            >
                                                Your notes on the cloud
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                </Section>
                                <LoginForm />
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </>
);

export default LoginScreen;
