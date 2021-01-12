import { useState } from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const carouselItem = [
        {
            title: 'Lorem ipsum dolor sit amet.',
            subTitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas?',
            image:
                'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80'
        },
        {
            title: 'Lorem ipsum dolor sit amet 2',
            subTitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas? 22',
            image:
                'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80'
        }
    ];

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {carouselItem.map((item, i) => (
                    <Carousel.Item key={i}>
                        <div
                            key={i}
                            className="d-flex justify-content-center align-items-center container-fluid m-0 p-0">
                            <Row className="w-100">
                                <Col
                                    md="6"
                                    className="d-flex justify-content-center align-items-center flex-column bg-secondary text-white">
                                    <h1>{item.title}</h1>
                                    <p>{item.subTitle}</p>
                                </Col>
                                <Col
                                    md="6"
                                    className="w-100"
                                    style={{
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        height: 600,
                                        backgroundImage: `url("${item.image}")`
                                    }}></Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
