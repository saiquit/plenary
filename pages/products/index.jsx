import { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems } from '../../redux/items/itemActions';

const navItems = [
    {
        title: 'DashBoard',
        key: 1
    },
    {
        title: 'Home',
        key: 2
    }
];

const index = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items);
    const [active, setActive] = useState({
        index: 0,
        item: navItems[0]
    });
    useEffect(() => {
        // dispatch(getAllItems(10));
        return () => {};
    }, []);

    return (
        <Container>
            <Row className="my-5">
                <Col md="4">
                    <ListGroup as="ul">
                        {navItems.map((item, i) => (
                            <ListGroup.Item
                                key={item.key}
                                as="li"
                                onClick={() =>
                                    setActive({
                                        index: i,
                                        item: item
                                    })
                                }
                                active={active.index === i}>
                                {item.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col md="8">col 1</Col>
            </Row>
        </Container>
    );
};

export default index;
