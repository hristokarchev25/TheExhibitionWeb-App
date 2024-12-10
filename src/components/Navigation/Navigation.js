import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/Logo.png';
import "./Navigation.css";

function Navigation() {
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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/pabloPage">Pablo Picasso</Nav.Link>
                            <Nav.Link href="/suzannePage">Suzanne Valadon</Nav.Link>
                            <Nav.Link href="/joanPage">Joan Miro</Nav.Link>
                            <Nav.Link href="#artShop">Art Shop</Nav.Link>
                            <Nav.Link href="/joinUs">Join Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation;