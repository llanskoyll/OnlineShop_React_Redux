import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar/TypeBar";
import DeviceList from "../components/DeviceBar/DeviceList";
import './../components/PegesStyles/Home.css'

const Home = () => {

    return (
        <Container className = "mt-5">
            <Row>
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;