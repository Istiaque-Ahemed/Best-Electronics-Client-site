import React from 'react';
import './Headar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



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
                            <NavLink className="pe-4 Nav-link" to="/services">Services</NavLink>
                            <NavLink className="pe-4 Nav-link" to="/contact">Contact Us</NavLink>
                            {user.email ? (
                                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/myorder">
                                        My Booking
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageorders">
                                        Manage All Booking
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addservice">
                                        Add New Package
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <NavLink to="/login" className="Nav-text">Login</NavLink>
                            )}
                            {user.email ? (
                                <button onClick={logout} className="btn btn-primary">
                                    Logout
                                </button>
                            ) : (
                                <span></span>
                            )}
                        </Nav>
                        <Navbar.Text>
                            <span className="ps-3">{user.displayName} </span>
                        </Navbar.Text>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;