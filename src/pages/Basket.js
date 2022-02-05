import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BasketItems from "../components/BsketItem/BasketItems";
import './../components/PegesStyles/Basket.css'
import {Container, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Basket = () => {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [status, setStatus] = useState(false)
    const user = useSelector(state => state.user)
    const resultPrice = user.basket.map(e => e.price).reduce((a, b) => a + b, 0)

    console.log(user)
    const buyProduct = () => {
        if (user.cash < resultPrice) {
            setModal(true)
        } else if (user.cash >= resultPrice) {
            dispatch({type: 'REMOVE_CASH', payload: user.cash - resultPrice})
            dispatch({type: 'BUY_BASKET_SUCCESS'})
        }
    }

    return (
        <Container>
            <div className="mt-5">
                {user.basket.length === 0
                    ?
                    <>Ваша корзина пуста!</>
                    :
                    <>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Фирма</th>
                                <th>Цена</th>
                            </tr>
                            </thead>
                            <tbody>
                            {user.basket.map((item, index) => (
                                <BasketItems key={index} index={index} item={item}/>
                            ))}
                            </tbody>
                        </Table>
                        <div className="resultBasket">
                            Итоговая сумма : {resultPrice}
                        </div>
                        <button
                            className="btn-buy"
                            onClick={() => buyProduct()}
                        >
                            Заказать
                        </button>
                        <div
                            className={modal ? "warning__basket active" : 'warning__basket'}
                            onClick={() => setModal(false)}
                        >
                            <div
                                className={modal ? "warning__basket__content active" : "warning__basket__content"}
                            >
                                <div className="warning__title">
                                    На вашем счете недостаточно средств
                                </div>
                                <div className="warning__buttons">
                                    <button>Закрыть</button>
                                    <NavLink to="/profile" className="btn__link">Пополнить</NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </Container>
    );
};

export default Basket;

