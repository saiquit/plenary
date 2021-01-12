import Head from 'next/head';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import News from '../components/News';
import Slider from '../components/Slider';
import TabItems from '../components/TabItems';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <Slider />
            <TabItems />
            <Jumbotron fluid className="bg-secondary text-white m-0">
                <Container>
                    <h1>Welcome to Plenary</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <News />
        </div>
    );
}
