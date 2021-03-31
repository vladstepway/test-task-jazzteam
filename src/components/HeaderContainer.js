import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Authentication from "./Authentication";
import {setLogout} from "../redux/reducers/authReducer";

export default function HeaderContainer() {

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const login = useSelector(state => state.auth.login)
    const dispatch = useDispatch();

    const onLogoutButtonClick = () => {
        console.log('on logout')
        dispatch(setLogout())
    }
    console.log('HeaderContainer')
    return (
        <div className="App-header">
            <Authentication isAuth={isAuth} name={login} onLogout={onLogoutButtonClick}/>
            <nav>
                <ul>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/profile'}>Profile</NavLink>
                    <NavLink to={'/info'}>Info</NavLink>
                </ul>
            </nav>
        </div>
    );
}
