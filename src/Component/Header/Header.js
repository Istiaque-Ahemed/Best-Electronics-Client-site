import React from 'react';
import './Headar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'





const Header = () => {
    const { user, logout } = useAuth()
    return (
        <>

            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                <Container >
                    <img
                        src={"https://i.ibb.co/6yvkYRX/Best-Electronics.png"}
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    <Navbar.Brand to="/home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="pe-5 Nav-area">
                            <NavLink className="pe-4 Nav-link" to="/home">Home</NavLink>
                            <NavLink className="pe-4 Nav-link" to="/products">Products</NavLink>
                            <NavLink className="pe-4 Nav-link" to="/show">More Product</NavLink>
                            {user.email ? (
                                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/myorder">
                                        My Order
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/pay">
                                        Pay
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/review">
                                        Review
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <button onClick={logout} className="btn logOut">
                                            Logout
                                        </button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <NavLink to="/login" className="Nav-text">Login</NavLink>
                            )}
                            {user.email ? (
                                <button onClick={logout} className=" btn logOut">
                                    Logout
                                </button>
                            ) : (
                                <span></span>
                            )}
                        </Nav>
                        <Navbar.Text>
                            <FontAwesomeIcon icon={faUser} />  <span className="ps-3">{user.displayName} </span>
                        </Navbar.Text>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;