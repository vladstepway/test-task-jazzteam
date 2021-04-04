import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Authentication from "./Authentication";
import {setLogout} from "../redux/reducers/authReducer";

export default function HeaderContainer() {

    const {isAuthenticated: isAuth, login} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onLogoutButtonClick = () => {
        dispatch(setLogout())
    }

    return (
        <div className="App-header">
            <nav className={'navigation'}>
                <ul className={'navigation-list'}>
                    <NavLink className={'navigation-item'} to={'/'}>Home</NavLink>
                    <NavLink className={'navigation-item'} to={'/profile'}>Profile</NavLink>
                    <NavLink className={'navigation-item'} to={'/info'}>Info</NavLink>
                </ul>
            </nav>
            <Authentication isAuth={isAuth} name={login} onLogout={onLogoutButtonClick}/>
        </div>
    );
}
