import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import DeviceListItem from "./DeviceListItem";

const DeviceList = () => {
    const dispatch = useDispatch()
    const activeTech = useSelector(state => state.catalog.activeTech)
    const activeIdBrand = useSelector(state => state.catalog.activeBrand_TypeBar)
    const allTech = useSelector(state => state.catalog.tech)

    const [value, setValue] = useState('')

    const filterActiveTech = activeTech.filter(count => {
        return count.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <div className = 'd-flex justify-content-end'>
            <span>Поиск </span>
                <input
                value = {value}
                onChange={(event) => setValue(event.target.value)}
                type="text"
            />
            </div>
            <Row className="d-flex">
                {(filterActiveTech.length > 0) ?
                    filterActiveTech.map(count => (
                        <DeviceListItem key={count.id} props={count}/>))
                    :
                    <p>Товара нет в наличии</p>
                }
            </Row>
        </div>
    );
};

export default DeviceList;


