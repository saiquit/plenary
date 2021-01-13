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
        child: []
    }
];

const index = () => {
    // const dispatch = useDispatch();
    // const { items } = useSelector((state) => state.items);
    const [active, setActive] = useState({
        index: 0,
        item: navItems[0]
    });
    console.log(active);
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
                                            setActive({
                                                index: i,
                                                item: item
                                            })
                                        }
                                        className="flex-row justify-content-between align-items-center"
                                        eventKey={item.key}>
                                        {item.title}{' '}
                                        <i hidden={!item.child.length} className="fa fa-plus"></i>
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
