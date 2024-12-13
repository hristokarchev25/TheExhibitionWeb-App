import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../../assets/hk22.jpg'),
        title: 'The State of Harmony',
        description: 'By Hristo Karchev'
    },
    {
        id: 2,
        image: require('../../assets/nb.jpg'),
        title: 'Alone',
        description: 'By Nikolai Baltov'
    },
    {
        id: 3,
        image: require('../../assets/kk1.jpg'),
        title: 'The Metamorphosis',
        description: 'By Krasimir Kostov'
    }
]

function ArtShopSlider() {
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
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </section>
    )
}

export default ArtShopSlider