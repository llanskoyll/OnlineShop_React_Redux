import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './Navibar.css'

const Navibar = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const logout = (e) => {
        e.preventDefault()
        dispatch({type: 'LOGOUT', payload: false})
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="me-auto">
                    {user.authorization
                        ?
                        <>
                            <Nav.Link><NavLink to="/" className = "nav__link">Каталог</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/profile" className = "nav__link" >Профиль</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/control" className = "nav__link" >Управление</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/basket" className="nav__link basketNavCount">Корзина
                                <span
                                    className = {user.basket.length === 0 ? "basketNavCountChild" : "basketNavCountChild active"}
                                >
                                    {user.basket.length}
                                </span>
                            </NavLink></Nav.Link>
                        </>
                        :
                        <Nav.Link><NavLink to="/" className = "nav__link" >Каталог</NavLink></Nav.Link>
                    }
                </Nav>
                {user.authorization
                    ?
                    <div className="nav-right">
                        <div className="nav-nameUser">
                            Логин: {user.login} Баланс: {user.cash}
                        </div>
                        <div className="nav-btn">
                            <button
                                type="submit"
                                onClick={(e) => logout(e)}
                            >
                                Выйти
                            </button>
                        </div>
                    </div>
                    :
                    <Nav.Link><NavLink to="/login" className = "nav__link">Войти</NavLink></Nav.Link>
                }
            </Container>
        </Navbar>
    );
};

export default Navibar;