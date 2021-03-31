import './App.css';
import React from "react";
import HeaderContainer from "./components/HeaderContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import ProfileContainer from "./components/ProfileContainer";
import Info from "./components/Info";
import {useSelector} from "react-redux";

function App() {
    console.log('App1')
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    console.log('App2')
    return (
        <div className="App">
            <HeaderContainer/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" render={() => <LoginForm/>}/>
                <Route path="/profile">
                    {/*<ProfileContainer/>*/}
                    {isAuth ? <ProfileContainer/> : <Redirect to="/login"/>}
                </Route>
                <Route path="/info" component={Info}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}

export default App;
