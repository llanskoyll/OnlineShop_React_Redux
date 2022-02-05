import React from 'react';
import {Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import ListProductItem from "./ListProductItem";

const ListProduct = () => {
    const dispatch = useDispatch()
    const activeTech = useSelector(state => state.catalog.activeTech)
    const activeIdBrand = useSelector(state => state.catalog.activeBrandTypeBar)
    const allTech = useSelector(state => state.catalog.tech)


    return (
        <Row className = "d-flex">
            { (activeTech.length > 0) ?
                activeTech.map(count => (
                <ListProductItem key = {count.id} props = {count}/>))
                :
                <p>Товара нет в наличии</p>
            }
        </Row>
    );
};

export default ListProduct;


