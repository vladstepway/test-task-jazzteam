import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {checkUserAuth, setErrors} from "../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";

import './LoginForm.css'

export default function LoginForm() {

    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();


    const onLoginSubmit = (data) => {
        dispatch(checkUserAuth({url: './credentials.json', data}));
    }

    const {isAuthenticated: isAuth, authErrors} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(setErrors(null));
    }, [dispatch, isAuth])

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div className="login">
            <form className={'login-form'} onSubmit={handleSubmit(onLoginSubmit)}>
                <input name="login"
                       ref={register({
                           required: "Login is required",
                           maxLength: {value: 20, message: "Login have to be <20 symbols"}
                       })}
                       placeholder="Login"
                />
                <div className={'error-message'}>{errors.login && errors.login.message}</div>
                <input
                    type={'password'}
                    name="password"
                    ref={register({
                        required: "Password is required",
                        minLength: {value: 8, message: "Password have to be >8 symbols"},
                        maxLength: {value: 20, message: "Password have to be <20 symbols"}
                    })}
                    placeholder="Password"
                />
                <div className={'error-message'}>{errors.password && errors.password.message}</div>
                <button type="submit">Send</button>
                <div
                    className={'error-message'}>
                    {authErrors && (!errors.login && !errors.password) ? authErrors.errorMessage : null}
                </div>
            </form>
        </div>
    );
}
