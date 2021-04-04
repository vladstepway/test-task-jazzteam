import React from "react";
import {NavLink} from "react-router-dom";

export default function Authentication({name, isAuth, onLogout}) {
    return (<div>
        {
            isAuth ? <div className={'greeting'}>Vecher v hatu, <span>{name}</span>
                <button onClick={onLogout}>Logout</button>
            </div> : <NavLink to={'/login'}>Login</NavLink>
        }
    </div>)
}
