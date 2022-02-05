import React from 'react';
import {privateRoute, publicRoute} from "./Router";
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";

const RouterApp = () => {
    const auth = useSelector(state => state.user.authorization)

    return (
        <Switch>
            {auth && privateRoute.map(route =>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key = {route.path}
                        />)
            }

            {!auth && publicRoute.map(route =>
            <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key = {route.path}
            />)}
            <Redirect to ={"/"}/>
        </Switch>
    );
};

export default RouterApp;