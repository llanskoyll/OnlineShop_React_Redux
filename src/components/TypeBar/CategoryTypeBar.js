import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const CategoryTypeBar = () => {
    const dispatch = useDispatch()
    const activeIdType = useSelector(state => state.catalog.activeType_TypeBar)
    const type = useSelector(state => state.catalog.type)

    const activeType_TypeBar = (count) => {
        dispatch({type: 'ACTIVE_TYPE_TYPEBAR', payload: count.id})
        dispatch({type: 'ACTIVE_TECH', payload: count})
    }

    return (
        <div>
            <ListGroup className = "TypeBar-2">
                <p>Категории</p>
                {type.map(count => (
                    <ListGroupItem className = "TypeBarItem"
                                   active ={activeIdType === count.id}
                                   onClick = {() => activeType_TypeBar(count)}
                                   key = {count.id}
                    >
                        {count.type}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default CategoryTypeBar;