import { useEffect, useState } from 'react';
import { Accordion, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllItems } from '../../redux/items/itemActions';

const navItems = [
    {
        title: 'Ready To Cook',
        key: 1,
        child: [
            {
                title: 'Fish',
                key: 3
            },
            {
                title: 'others',
                key: 4
            }
        ]
    },
    {
        title: 'Home',
        key: 2,
        child: [
            {
                title: 'Other 1',
                key: 5
            }
        ]
    }
];

const index = () => {
    // const dispatch = useDispatch();
    // const { items } = useSelector((state) => state.items);
    const [active, setActive] = useState({
        index: null,
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
                    {navItems.map((item, i) => (
                        <Accordion key={i} style={{ cursor: 'pointer' }}>
                            <Card>
                                <Card.Header
                                    className={
                                        item.key === active.item.key && `bg-secondary text-white`
                                    }>
                                    <Accordion.Toggle
                                        as={ListGroup}
                                        variant=""
                                        onClick={() =>
                                            setActive((prevItem) => {
                                                if (prevItem.index === i) {
                                                    return {
                                                        index: null,
                                                        item: prevItem.item
                                                    };
                                                }
                                                return {
                                                    index: i,
                                                    item
                                                };
                                            })
                                        }
                                        className="flex-row justify-content-between align-items-center"
                                        eventKey={item.key}>
                                        {item.title}{' '}
                                        <i
                                            hidden={!item.child.length}
                                            className={`fa ${
                                                i === active.index ? 'fa-minus' : 'fa-plus'
                                            }`}></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                {item?.child.map((subItem, idx) => (
                                    <Accordion.Collapse
                                        className={
                                            subItem.key === active.item.key &&
                                            `bg-secondary text-white`
                                        }
                                        key={subItem.key}
                                        eventKey={item.key}>
                                        <Card.Body
                                            onClick={() =>
                                                setActive({
                                                    index: idx,
                                                    item: subItem
                                                })
                                            }>
                                            {subItem.title}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                ))}
                            </Card>
                        </Accordion>
                    ))}
                </Col>
                <Col md="8">col 1</Col>
            </Row>
        </Container>
    );
};

export default index;
