import React from 'react';
import './TypeBar.css'
import BrandTypeBar from "./BrandTypeBar";
import CategoryTypeBar from "./CategoryTypeBar";
import {useDispatch, useSelector} from "react-redux";

const TypeBar = () => {

    const dispatch = useDispatch()
    const type = useSelector(state => state.catalog.activeType_TypeBar)
    const brand = useSelector(state => state.catalog.activeBrand_TypeBar)

    const resetFilter = () => {
        dispatch({type: 'RESET_FILTER', payload: 0})
    }

    return (
        <>
            <BrandTypeBar/>
            <CategoryTypeBar/>
            <button className = "Btn_reset" onClick = {() => resetFilter()}>Сбросить фильтр</button>
        </>
    );
};

export default TypeBar;