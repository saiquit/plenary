import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import styles from '../styles/components/tabs.module.css';

const cardDetails = [
    {
        image: '/images/svg/shop.svg',
        title: 'Plenary Aqua'
    },
    {
        image: '/images/svg/fish.svg',
        title: 'Plenary Aqua'
    }
];

const TabItems = () => {
    return (
        <Container className="my-5">
            <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center align-items-center" md="4" sm="4">
                    <div>
                        <h2>Our Fields</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sunt
                            unde blanditiis magni amet deleniti veritatis excepturi voluptatum animi
                            temporibus.
                        </p>
                    </div>
                </Col>
                {cardDetails.map((card, i) => (
                    <Col key={i} className="d-flex justify-content-center" md="4" sm="4">
                        <Card className={`border-0 p-4 ${styles.card_item}`}>
                            <Card.Img
                                variant="top"
                                src={card.image}
                                height="150"
                                width="150"
                                className="border border-darken-1 p-4 circle"
                                style={{ borderRadius: 15 }}
                            />
                            <Card.Body>
                                <Card.Title className="text-center">{card.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TabItems;
