import React from "react";
import {NavLink} from "react-router-dom";

export default function Authentication({name, isAuth, onLogout}) {
    console.log('Authentication')
    return (<div>
        {
            isAuth ? <div>Vecher v hatu,{name}
                <button onClick={onLogout}>Logout</button>
            </div> : <NavLink to={'/login'}>Login</NavLink>
        }
    </div>)
}
