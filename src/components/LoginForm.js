import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {checkUserAuth, setErrors} from "../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";

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

    console.log('Err', errors)
    console.log('Auth', authErrors)
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <input name="login"
                       ref={register({required: "Login is required", maxLength: 20})}
                       placeholder="Login"
                />
                {errors.login && errors.login.message}
                <input
                    // type={'password'}
                    name="password"
                    ref={register({
                        required: "Password is required",
                        minLength: {value: 8, message: "Password have to be >8 symbols"},
                        maxLength: 20
                    })}
                    placeholder="Password"
                />
                {errors.password && errors.password.message}
                <button type="submit">Send</button>
                {authErrors && (!errors.login && !errors.password) ? authErrors.errorMessage : null}
            </form>
        </div>
    );
}
