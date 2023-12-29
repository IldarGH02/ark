import {MyInput} from "../../shared/ui/myInput";
import {MyButton} from "../../shared/ui/myButton";
import {useState} from "react";
import * as React from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {setUser} from "../../app/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { error } = useAppSelector(state => state.user)

    const handleLogin = (email: string, password: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    isAuth: true
                }))
                navigate('/home')
            })
            .catch((err) => {
                dispatch(setUser({
                    error: err
                }))
            })
    }

    return (
        <>
            <form className="login__form d-flex flex-column gap-3 w-50 align-items-center">
                <MyInput
                    className={`login__input-email login__form-input w-100 ${error ? 'error' : ''}`}
                    value={email}
                    type='text'
                    placeholder={`${error ? 'Проверьте email' : 'Введите email'}`}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <MyInput
                    className='login__input-password login__form-input w-100'
                    value={password}
                    type='password'
                    placeholder='Введите password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <MyButton
                    buttonName='Войти'
                    className='login__button-submit btn btn-primary w-50'
                    onClick={(e) => handleLogin(email, password, e)}/>
            </form>
        </>
    )
}