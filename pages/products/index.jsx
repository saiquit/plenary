import { useEffect, useState } from 'react';
import { Accordion, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categories/categoryActions';
import { getAllItems } from '../../redux/items/itemActions';

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
                title: 'Others',
                key: 4
            }
        ]
    },
    {
        title: 'Fresh Fish',
        key: 2,
        child: [
            {
                title: 'Fresh Fish',
                key: 5
            },

            {
                title: 'Sea Water',
                key: 6
            }
        ]
    },
    {
        title: 'Dried Fish',
        key: 7,
        child: [
            {
                title: 'Fresh Water',
                key: 8
            },
            {
                title: 'Sea Fish',
                key: 9
            }
        ]
    }
];

const index = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items);
    const { categories } = useSelector((state) => state.categories);
    const [active, setActive] = useState({
        index: null,
        item: navItems[0]
    });
    useEffect(() => {
        dispatch(getAllItems());
        dispatch(getAllCategories());
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
                                                i === active.index ? 'fa-angle-up' : 'fa-angle-down'
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
