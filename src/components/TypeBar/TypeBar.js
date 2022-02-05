import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import './ListBrand.css'

const ListBrand = () => {

    const dispatch = useDispatch()
    const brands = useSelector(state => state.catalog.brands)
    const activeIdBrand = useSelector(state => state.catalog.activeBrandTypeBar)

    const activeBrandTypeBar = (count) => {
        dispatch({type: 'ACTIVE_BRAND_TYPEBAR', payload: count.id})
        dispatch({type: 'ACTIVE_TECH', payload: count})
    }
    
    return (
        <ListGroup className = "TypeBar">
            {brands.map(count => (
                    <ListGroupItem className = "TypeBarItem"
                        active ={activeIdBrand === count.id}
                        onClick = {() => activeBrandTypeBar(count)}
                        key = {count.id}
                    >
                        {count.name}
                    </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default ListBrand;