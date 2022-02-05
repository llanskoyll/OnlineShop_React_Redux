import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const BrandTypeBar = () => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.catalog.brands)
    const activeIdBrand = useSelector(state => state.catalog.activeBrand_TypeBar)
    const activeBrand_TypeBar = (count) => {
        dispatch({type: 'ACTIVE_BRAND_TYPEBAR', payload: count.id})
        dispatch({type: 'ACTIVE_TECH', payload: count})
    }


    return (
        <ListGroup className = "TypeBar">
            <p>Фирма</p>
            {brands.map(count => (
                <ListGroupItem className = "TypeBarItem"
                               active ={activeIdBrand === count.id}
                               onClick = {() => activeBrand_TypeBar(count)}
                               key = {count.id}
                >
                    {count.brand}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default BrandTypeBar;