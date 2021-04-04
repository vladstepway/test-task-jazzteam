import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import ProfileContainer from "./ProfileContainer";
import InfoContainer from "./InfoContainer";
import React from "react";
import {useSelector} from "react-redux";

export default function Main() {
    const {isAuthenticated: isAuth} = useSelector(state => state.auth);
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/profile">
                {isAuth ? <ProfileContainer/> : <Redirect to="/login"/>}
            </Route>
            <Route path="/info">
                {isAuth ? <InfoContainer/> : <Redirect to="/login"/>}
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
