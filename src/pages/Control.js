import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import './../components/PegesStyles/Control.css'
import {useDispatch, useSelector} from "react-redux";

const Control = () => {
    const dispatch = useDispatch()
    const catalog = useSelector(state => state.catalog)

    const [brandModal, setBrandModal] = useState(false)
    const [typeModal, setTypeModal] = useState(false)
    const [productModal, setProductModal] = useState(false)
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')


    const createBrand = () => {
        let flag = true
        let stack = []
        stack = catalog.brands.map(e => e.brand.toLowerCase() === brand.toLowerCase() ? false : true)
        stack.forEach(e => e ? null : flag = false)
        if (flag) {
            dispatch({type: 'ADD_NEW_BRAND', payload: {id: Date.now(), brands: brand}})
            setBrand('')
            setBrandModal(false)
        } else {
            setBrand('')
            alert("Такая Фирма уже есть, измените название!")
        }
    }
    const createType = () => {
        let flag = true
        let stack = []
        stack = catalog.type.map(e => e.type.toLowerCase() === type.toLowerCase() ? false : true)
        stack.forEach(e => e ? null : flag = false)
        if (flag) {
            dispatch({type: 'ADD_NEW_TYPE', payload: {id: Date.now(), type: type}})
            setType('')
            setTypeModal(false)
        } else {
            setType('')
            alert("Такая Категория уже есть, измените название!")
        }
    }

    const createProduct = () => {
        let flag = true
        let stack = []
        stack = catalog.tech.map(e => e.name.toLowerCase() === name.toLowerCase() ? false : true)
        stack.forEach(e => e ? null : flag = false)
        if(!flag) alert("Такая название продукта уже есть, измените название!")

        flag = false
        catalog.type.map(e => e.type === type ? flag = true : false)
        catalog.brands.map(e => e.brand === type ? flag = true : false)

        if (flag) {
            dispatch({
                type: 'ADD_NEW_PRODUCT',
                payload: {
                    id: Date.now,
                    type: type,
                    name: name,
                    brand: brand,
                    price: price
                }
            })
            setPrice('')
            setName('')
            setType('')
            setBrand('')
            setProductModal(false)
        } else {
            alert("Для добавление нового товара добавьте сначала Категорию и Фирму для этого товара")
        }
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="buttons">
                <Button variant="success" className="me-5" onClick={() => {
                    setBrandModal(true);
                    setBrand('')
                }}>Добавить бренд</Button>
                <Button variant="success" className="me-5" onClick={() => {
                    setTypeModal(true);
                    setType('')
                }}>Добавить
                    Категорию</Button>
                <Button variant="success" className="me-5"
                        onClick={() => {
                            setProductModal(true);
                            setType('');
                            setBrand('');
                            setName('');
                            setPrice('')
                        }}>
                    Добавить Товар
                </Button>
            </div>
            <div className="Control">
                <div className={brandModal ? "ControlModal active" : "ControlModal"}
                     onClick={() => setBrandModal(false)}>
                    <div className={brandModal ? "ControlModal__content active" : "modalItem__content"}
                         onClick={e => e.stopPropagation()}>
                        <span>Название бренда : </span>
                        <input type="text"
                               onChange={e => setBrand(e.target.value)}
                               value={brand}
                        />
                        <div className="btn__control d-flex justify-content-end">
                            <Button variant="outline-dark" className="mt-2 me-2"
                                    onClick={() => createBrand()}>Создать</Button>
                            <Button variant="outline-dark" className="mt-2"
                                    onClick={() => setBrandModal(false)}>Закрыть</Button>
                        </div>
                    </div>
                </div>
                <div className={typeModal ? "ControlModal active" : "ControlModal"} onClick={() => setTypeModal(false)}>
                    <div className={typeModal ? "ControlModal__content active" : "modalItem__content"}
                         onClick={e => e.stopPropagation()}>
                        <span>Название категории : </span>
                        <input type="text"
                               onChange={e => setType(e.target.value)}
                               value={type}
                        />
                        <div className="btn__control d-flex justify-content-end">
                            <Button variant="outline-dark" className="mt-2 me-2"
                                    onClick={() => createType()}>Создать</Button>
                            <Button variant="outline-dark" className="mt-2"
                                    onClick={() => setTypeModal(false)}>Закрыть</Button>
                        </div>
                    </div>
                </div>
                <div className={productModal ? "ControlModal active" : "ControlModal"}
                     onClick={() => setProductModal(false)}>
                    <div className={productModal ? "ControlModal__content active" : "modalItem__content"}
                         onClick={e => e.stopPropagation()}>
                        <div className="mt-2 d-flex justify-content-between">
                            <span>Название Продукта : </span>
                            <input type="text"
                                   onChange={e => setName(e.target.value)}
                                   value={name}
                            />
                        </div>
                        <div className="mt-2 d-flex justify-content-between">
                            <span>Название Фирмы : </span>
                            <input type="text"
                                   onChange={e => setBrand(e.target.value)}
                                   value={brand}
                            />
                        </div>
                        <div className="mt-2 d-flex justify-content-between">
                            <span>Название Категории : </span>
                            <input type="text"
                                   onChange={e => setType(e.target.value)}
                                   value={type}
                            />
                        </div>
                        <div className="mt-2 d-flex justify-content-between">
                            <span>Цена : </span>
                            <input type="text"
                                   onChange={e => setPrice(e.target.value)}
                                   value={price}
                            />
                        </div>
                        <div className="btn__control d-flex justify-content-between">
                            <Button variant="outline-dark" className="mt-2 me-2"
                                    onClick={() => createProduct()}>Создать</Button>
                            <Button variant="outline-dark" className="mt-2"
                                    onClick={() => setProductModal(false)}>Закрыть</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Control;