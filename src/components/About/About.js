import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./About.css";

import img1 from '../../assets/img1.jpg';

function About() {
    return (
        <section className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className="subtitle">learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col sm={6}>
                        <p>At The Exhibition Web App, we make it our mission to help you discover and buy from the best emerging artists around the world. Whether you’re looking to discover a new artist, add a statement piece to your home, or commemorate an important life event, The Exhibition Web App is your portal to thousands of original works by today’s top artists.</p>
                        <p>At The Exhibition Web App you have the chance to learn about some of the most popular artists of the past. Greats like Pablo Picasso, Suzanne Valadon and Joan Miró. You have the opportunity to read in detail about some of their most famous works.</p>
                        <p>We are proud to present a collection of hobby paintings and photos by young artists! Enjoy!</p>
                        <p><b>Hristo Karchev</b><br />Creator</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About