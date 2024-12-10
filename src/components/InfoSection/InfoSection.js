import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./InfoSection.css";

import img1 from '../../assets/img1.jpg';

function InfoSection() {
    return (
        <section className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <h2 id='info-header'>Info Us</h2>
                    <div className="subtitle">learn more this mf</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col className='info-paragraph' sm={6}>
                        <p>“At The Exhibition Web App, we make it our mission to help you discover
                            buy from the best emerging artists around the world.
                            Whether you’re looking to discover a new artist, add a statement piece to your home,
                            or commemorate an important life event, The Exhibition Web App is your portal to thousands of original works by today’s top artists.”
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InfoSection