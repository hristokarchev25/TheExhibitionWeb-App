import React from 'react'
import "./ContactUs.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUs() {
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact us</h2>
                    <div className="subtitle">get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="email" placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="tel" placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your contact message" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158979.46403020338!2d27.789416963749783!3d43.21193883425022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538baaf3d7a1%3A0x5727941c71a58b7c!2z0JLQsNGA0L3QsA!5e0!3m2!1sbg!2sbg!4v1733502412347!5m2!1sbg!2sbg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            000-000-0000
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            London, United Kingdom
                        </li>
                    </ul>
                </div>
            </Container> */}
        </section>
    )
}

export default ContactUs