import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./InfoSection.css";


function InfoSection({
    id,
    nameOfPage,
    subtitle,
    image,
    descriptionParahraph
}) {
    return (
        <section className="block about-block">
            <Container id={id} fluid>
                <div className="title-holder">
                    <h2 id='info-header'>{nameOfPage}</h2>
                    <div className="subtitle">{subtitle}</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={image} />
                    </Col>
                    <Col className='info-paragraph' sm={6}>
                        <p>{descriptionParahraph}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InfoSection