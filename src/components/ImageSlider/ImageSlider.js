import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./ImageSlider.css";

var heroData = [
    {
        id: 1,
        image: require('../../assets/img-hero1.jpg'),
        title: 'Pablo Picasso',
        description: 'Every child is an artist. The problem is how to remain an artist once he grows up.',
        link: 'https://www.google.com',
        btnText: 'Learn More'
    },
    {
        id: 2,
        image: require('../../assets/img-hero2.jpg'),
        title: 'Suzanne Valadon',
        description: 'I had great masters. I took the best of them of their teachings, of their examples. I found myself, I made myself, and I said what I had to say.',
        link: 'https://www.facebook.com',
        btnText: 'Learn More'
    },
    {
        id: 3,
        image: require('../../assets/img-hero3.jpg'),
        title: 'Joan Miró',
        description: 'It is the young people who interest me, and not the old dodos. If I go on working, it is for the year 2000, and for the people of tomorrow.',
        link: 'https://www.twitter.com',
        btnText: 'Learn More'
    },
    {
        id: 4,
        image: require('../../assets/img-hero4.jpg'),
        title: 'Art Shop',
        description: 'Explore an unparalleled selection of paintings, photography, sculpture, and more by thousands of artists from around the world.',
        link: 'https://www.twitter.com',
        btnText: 'Art Shop'
    },
]

function ImageSlider() {
    return (
        <section className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"slide " + hero.id}
                                />
                                <Carousel.Caption>
                                    <h2>{hero.title}</h2>
                                    <p>{hero.description}</p>
                                    <a className="btn btn-primary" href={hero.link}>{hero.btnText}</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </section>
    )
}

export default ImageSlider