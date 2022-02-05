import React, {useState} from 'react';
import './Modal.css'
import {useDispatch, useSelector} from "react-redux";

const Modal = ({active, setActive}) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [cash, setCash] = useState("0")

    const addCash = () => {
        if (cash.length === 1) {
            if (cash == 0) {
                alert("Введите корректное значение")
            } else {
                alert("GO")
            }
        } else {
            if(parseInt(cash.split("")[0]) == 0) {
                alert("Введите корректное значение")
            } else {
                dispatch({type: 'ADD_CASH', payload: cash})
                setCash("0")
                setActive(false)
            }

        }
    }
    return (
        <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
            <div className={active ? "Modal__content active" : "Modal__content"} onClick={e => e.stopPropagation()}>
                <div className="Modal__AddCash">
                    <div className="addCash">
                        Введите сумму, которую хотите внести
                        <input
                            value={cash}
                            onChange={e => setCash(e.target.value)}
                            className="mt-2"
                            type="text"
                        />
                    </div>
                    <div className="Modal__btnClose d-flex justify-content-end">
                        <button onClick={() => setActive(false)}>Закрыть</button>
                        <button onClick={() => addCash()}>Пополнить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;