import {NavLink} from "react-router-dom";
import * as React from "react";
import {LoginForm} from "../../widgets/loginForm";

export const Login = () => {
    return (
        <section className="login w-100 h-100">
            <div className="container w-100 h-100">
                <div className="login__content w-100 h-100 d-flex flex-column gap-2 align-items-center justify-content-center">
                    <LoginForm/>
                    <div className="login__redirect-link">
                        Есть аккаунт? <NavLink to='/register'>Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}