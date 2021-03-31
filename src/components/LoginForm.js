import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";

export default function LoginForm() {

    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();


    const onLoginSubmit = (data) => {
        dispatch(setAuthUser(data.login))
    }

    const isAuth = useSelector(state => state.auth.isAuthenticated)
    if (isAuth) {
        return <Redirect to="/profile"/>
    }
    console.log('LoginForm')
    return (
        <div className="Login">
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <input name="login" ref={register} placeholder="Login" value={"Admin"}/>
                <input name="password" ref={register} placeholder="Password" value={"12345678"}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
