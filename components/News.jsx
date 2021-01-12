import { Col, Container, Row } from 'react-bootstrap';

const News = () => {
    const items = [1, 2, 3];
    return (
        <Container
            fluid
            style={{
                background: `url("https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80")`
            }}
            className="py-4 bg-center bg-cover ">
            <Container className="py-2 ">
                <Row>
                    {items.map((item, i) => (
                        <Col md="4" key={i}>
                            <div className="card mb-4 shadow-sm">
                                <img
                                    className="card-img-top"
                                    src="https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary">
                                                View
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default News;
