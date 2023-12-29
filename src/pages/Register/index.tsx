import {NavLink} from "react-router-dom";
import {RegisterForm} from "../../widgets/registerForm";

export const Register = () => {
    return (
        <section className="register w-100 h-100 d-flex">
            <div className="container w-100 h-100">
                <div className="register__content d-flex h-100 flex-column gap-2 align-items-center justify-content-center">
                    <RegisterForm/>
                    <div className="register__redirect-link">
                        Есть аккаунт? <NavLink to='/login'>Войти</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}