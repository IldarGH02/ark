import {NavLink} from "react-router-dom";
import * as React from "react";
import {LoginForm} from "../../widgets/loginForm";

export const Login = () => {
    return (
        <section className="login">
            <div className="container">
                <div className="login__content d-flex flex-column gap-5">
                    <LoginForm/>
                    <div className="login__redirect-link">
                        Есть аккаунт? <NavLink to='/register'>Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}