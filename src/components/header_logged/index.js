import React, { useState } from 'react';
import { Navbar, Column, Button, Dropdown } from 'rbx';
import '../../styles/header.scss';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../../assets/images/logo-white.png';
import UserService from '../../services/users';

function HeaderLogged(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const logOut = async () => {
        await UserService.logout();
        setRedirectToHome(true);
    };

    if (redirectToHome) return <Redirect to={{ pathname: '/' }} />;

    return (
        <Navbar color="custom-purple" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <Link to="/notes">
                            <img src={LogoImage} alt="Logo" />
                        </Link>
                    </Column>
                </Column.Group>
                <Navbar.Burger
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </Navbar.Burger>
            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Segment
                    as="div"
                    className="navbar-item navbar-start"
                    align="start"
                >
                    <Navbar.Item as="div">
                        <Button
                            className="open-button"
                            color="white"
                            outlined
                            // eslint-disable-next-line react/prop-types
                            onClick={() =>
                                props.setIsOpen((state) => {
                                    props.setIsOpen(!state);
                                })
                            }
                        >
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </Navbar.Item>
                </Navbar.Segment>
                <Navbar.Segment
                    as="div"
                    className="navbar-item navbar-end"
                    align="right"
                >
                    <Navbar.Item as="div">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button
                                    className="button"
                                    color="white"
                                    outlined
                                >
                                    <span>Leonardo ▼</span>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={() => logOut()}>
                                            LogOut
                                        </a>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    );
}

export default HeaderLogged;
