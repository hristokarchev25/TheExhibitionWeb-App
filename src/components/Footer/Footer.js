import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
    return (
        <footer id='footer'>
            <Container fluid>
                <div className="copyright">&copy; 2024 Karcho. All Right Reserved.</div>
                <div className="socials">
                    <ul>
                        <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
                        <li><a href="https://www.linkedin.com"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer