import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { db } from '../../utils/firebase';

function PabloDetails() {

    let [painting, setPainting] = useState({});

    useEffect(() => {
        let path = window.location.pathname;
        let splited = path.split("/");
        let id = splited[3];
        db.collection("pabloCollection")
            .doc(id)
            .get()
            .then(res => setPainting(res.data()))
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="block about-block">
            <Container id={painting.id} fluid>
                <div className="title-holder">
                    <h2 id='info-header'>{painting.nameOfPaintings}</h2>
                    <div className="subtitle">{painting.year}</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={painting.image} />
                    </Col>
                    <Col className='info-paragraph' sm={6}>
                        <p>{painting.descriptionParahraph}</p>
                        <p>{painting.descriptionParahraphTwo}</p>
                        <p>{painting.descriptionParahraphThree}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PabloDetails