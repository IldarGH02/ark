import {NavLink} from "react-router-dom";
import {RegisterForm} from "../../widgets/registerForm";

export const Register = () => {
    return (
        <section className="register">
            <div className="container">
                <div className="register__content d-flex flex-column gap-5">
                    <RegisterForm/>
                    <div className="register__redirect-link">
                        Есть аккаунт? <NavLink to='/login'>Войти</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}