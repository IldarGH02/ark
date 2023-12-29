import {MyInput} from "../../shared/ui/myInput";
import {MyButton} from "../../shared/ui/myButton";
import {useState} from "react";
import * as React from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = (email: string, password: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }

    return (
        <>
            <form className="login__form">
                <MyInput
                    className='login__input-email'
                    value={email}
                    type='text'
                    placeholder='Введите email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <MyInput
                    className='login__input-password'
                    value={password}
                    type='password'
                    placeholder='Введите password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <MyButton
                    buttonName='Войти'
                    className='login__button-submit'
                    onClick={(e) => handleLogin(email, password, e)}/>
            </form>
        </>
    )
}