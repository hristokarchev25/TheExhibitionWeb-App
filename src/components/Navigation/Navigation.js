import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { auth } from '../../utils/firebase';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/Logo2.png';
import "./Navigation.css";

function Navigation({ email, isAuth }) {
    let location = useNavigate();

    const doSignOut = (e) => {
        e.preventDefault()
        auth.signOut()
            .then(userCredential => {
                location('/');
            })
            .catch(err => console.log(err));;
    }
    return (
        <header id="header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            width="150"
                            object-fit="contain"
                            className="d-inline-block align-top"
                            alt="App logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/pabloPage">Pablo Picasso</Link>
                            <Link to="/suzannePage">Suzanne Valadon</Link>
                            <Link to="/joanPage">Joan Miro</Link>
                            <Link to="/artShop">Art Shop</Link>
                            {!isAuth ?
                                (
                                    <Link to="/joinUs">Join Us</Link>
                                ) : (
                                    <>
                                        <Link to="#"> Welcome, {email}</Link>
                                        <Link to='#' onClick={doSignOut}>Log Out</Link>
                                    </>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Navigation;