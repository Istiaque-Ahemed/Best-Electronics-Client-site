import { Alert, Button, Spinner } from "react-bootstrap";
import React from 'react';
import { Col, Container, FloatingLabel, Row, Form } from 'react-bootstrap';
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Registar = () => {
    const { handleUserRegister, isLoading, user, error } = useAuth();
    const history = useHistory();
    const [loginData, setLoginData] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('You Password did not match')
            return;
        }
        handleUserRegister(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <h3 className="text-center Login-title">Register</h3>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>


                        <>
                            <div className="login-area">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="User Name"
                                    className="mb-3"
                                >
                                    <Form.Control name="name" onBlur={handleOnBlur} style={{ width: '75%' }} type="text" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control name="email" onBlur={handleOnBlur} style={{ width: '75%' }} type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel

                                    controlId="floatingPassword" label="Password">
                                    <Form.Control name="password" onBlur={handleOnBlur} style={{ width: '75%' }} type="password" placeholder="Password" />

                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingPassword" label="Retype You 
                                  Password">
                                    <Form.Control className="mt-3" name="password2" onBlur={handleOnBlur} style={{ width: '75%' }} type="password" placeholder="Password" />
                                </FloatingLabel>

                                <Button className="login-btn" type="submit" variant="danger">Register</Button><br />

                                <NavLink
                                    to="/login">
                                    <Button style={{ textDecoration: 'none' }} variant="link">Already Register?Please Login</Button>
                                </NavLink>
                            </div>
                        </>
                    </form>}
                    {isLoading && <Spinner className="text-center" animation="grow" variant="danger" />
                    }
                    {user?.email && <Alert> Registration Successful</Alert>}
                    {error && <Alert variant="denger">{error}</Alert>}

                </Col>
                <Col sm={12} md={6}>
                    <img style={{ width: '110%' }} src={'https://i.ibb.co/Stpy7XM/Mobile-login.jpg'} alt="" />

                </Col>
            </Row>
        </Container>
    );
};

export default Registar;