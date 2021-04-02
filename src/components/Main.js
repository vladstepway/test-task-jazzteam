import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import ProfileContainer from "./ProfileContainer";
import Info from "./Info";
import React from "react";
import {useSelector} from "react-redux";

export default function Main() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/profile">
                {isAuth ? <ProfileContainer/> : <Redirect to="/login"/>}
            </Route>
            <Route path="/info" component={Info}/>
            <Redirect to="/"/>
        </Switch>
    )
}
