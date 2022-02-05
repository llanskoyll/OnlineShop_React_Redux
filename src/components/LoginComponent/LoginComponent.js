import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const LoginComponent = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const loginFun = (e) => {
        e.preventDefault()
        dispatch({type: 'LOGIN', payload: {login: login, password: password}})

    }
    return (
        <div>
            <Form className = "FormLogin">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter login"
                        value = {login}
                        onChange={e => setLogin(e.target.value)}
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
                    <Button variant="primary" type="submit" onClick={loginFun}>
                        Войти
                    </Button>
                    Нет аккаунт?  <NavLink to = "/registration"> Регистрация</NavLink>
                </div>
            </Form>
        </div>
    );
};

export default LoginComponent;