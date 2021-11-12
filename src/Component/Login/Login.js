import { Button, Spinner, Alert } from "react-bootstrap";
import React from 'react';
import { Col, Container, FloatingLabel, Row, Form } from 'react-bootstrap';
import { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import './Login.css'
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { user, loginUser, signInUsinGoogle, isLoading, error } = useAuth();
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInUsinGoogle(location, history)
    }
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <h3 className="text-center Login-title">Login</h3>
                    <form onSubmit={handleLoginSubmit}>


                        <>
                            <div className="login-area">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control name="email" onChange={handleOnChange} style={{ width: '75%' }} type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control name="password" onChange={handleOnChange} style={{ width: '75%' }} type="password" placeholder="Password" />
                                </FloatingLabel>

                                <Button className="login-btn" type="submit" variant="danger">Login</Button><br />
                                <NavLink

                                    to="/register">
                                    <Button style={{ textDecoration: 'none' }} variant="link">New user?Please Register</Button>
                                </NavLink>
                                {isLoading && <Spinner className="text-center" animation="grow" variant="danger" />
                                }
                                {user?.email && <Alert> Login Successful</Alert>}
                                {error && <Alert variant="denger">{error}</Alert>}
                                {user?.email && <span></span>}
                            </div>
                        </>
                    </form>
                    <Button onClick={handleGoogleSignIn} variant="success">Google Sign In</Button>

                </Col>
                <Col sm={12} md={6}>
                    <img style={{ width: '110%' }} src={'https://i.ibb.co/Xjv8jmY/Mobile-login-bro.png'} alt="" />

                </Col>
            </Row>
        </Container>
    );
};

export default Login;