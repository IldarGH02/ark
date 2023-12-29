import {MyInput} from "../../shared/ui/myInput";
import {MyButton} from "../../shared/ui/myButton";
import * as React from "react";
import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useAppDispatch} from "../../features/hooks";
import { setUser } from "../../app/store/slices/userSlice";
import { useNavigate } from 'react-router-dom'

export const RegisterForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleRegister = (email: string, password: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    isAuth: true
                }))
                navigate('/home')
            })
            .catch(console.error)
    }

    return (
            <form className="register__form d-flex flex-column gap-3 w-50 align-items-center" onSubmit={event => event.preventDefault()}>
                <MyInput
                    className='register__input-email register__form-input w-100'
                    value={email}
                    type='text'
                    placeholder='Введите email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <MyInput
                    className='register__input-password register__form-input w-100'
                    value={password}
                    type='password'
                    placeholder='Введите password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <MyButton
                    buttonName='Зарегистрироваться'
                    className='register__button-submit btn btn-primary w-50'
                    onClick={(e) => handleRegister(email, password, e)}/>
            </form>
    )
}