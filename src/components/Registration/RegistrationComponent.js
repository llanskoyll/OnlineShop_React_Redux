import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createHashHistory} from "history";

const LoginComponent = () => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const reg = (e) => {
        e.preventDefault()
        dispatch({type: 'REGISTRATION', payload: {login: login, password: password}})
        alert("Поздравляю, вы зарегистрировались под логином " + login + "!")
        setLogin("")
        setPassword("")
    }

    return (
        <div>
            <Form className = "FormLogin">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        value = {login}
                        onChange={e => setLogin(e.target.value)}
                        type="text"
                        placeholder="Enter login"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value = {password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="btn d-flex">
                    <Button variant="primary" type="button" onClick={reg}>
                        Зарегистрироваться
                    </Button>
                   <NavLink to = "/login">Войти</NavLink>
                </div>
            </Form>
        </div>
    );
};

export default LoginComponent;