import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { db } from '../../utils/firebase';


function ShopDetails() {

    let [product, setProduct] = useState({});

    useEffect(() => {
        let path = window.location.pathname;
        let splited = path.split("/");
        let id = splited[3];
        db.collection("shop")
            .doc(id)
            .get()
            .then(res => setProduct(res.data()))
            .catch(err => console.log(err));
    }, []);


    return (
        <section className="block about-block">
            <Container id={product.id} fluid>
                <div className="title-holder">
                    <h2 id='info-header'>{product.nameOfProduct}</h2>
                    <div className="subtitle">{product.price}</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={product.image} />
                    </Col>
                    <Col className='info-paragraph' sm={6}>
                        <p>By: {product.artistName}</p>
                        <p>{product.descriptionParagraph}</p>
                        <p>{product.descriptionParagraphTwo}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ShopDetails
