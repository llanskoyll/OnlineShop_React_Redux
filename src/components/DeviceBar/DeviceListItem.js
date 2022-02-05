import React from 'react';
import {Card, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const DeviceListItem = ({props}) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.user.authorization)

    const addBasket = () => {
        dispatch({type: 'ADD_BASKET', payload: props})
    }

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
                    {auth && <button
                            onClick = {() => addBasket()}
                            className = "addBasket"
                        >
                            В корзину
                        </button>
                    }

                </ListGroup>
            </Card>
        </Col>
    );
};

export default DeviceListItem;