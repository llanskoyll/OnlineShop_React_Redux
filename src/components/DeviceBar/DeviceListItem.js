import React from 'react';
import {Card, Col, ListGroup, ListGroupItem} from "react-bootstrap";

const ListProductItem = ({props}) => {
    return (
        <Col md = {3}>
            <Card style={{width: '12rem', margin: '5px'}}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Категория: {props.type}</ListGroupItem>
                    <ListGroupItem>Фирма: {props.brand}</ListGroupItem>
                    <ListGroupItem>Цена: {props.price}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default ListProductItem;