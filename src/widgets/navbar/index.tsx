import { NavLink } from 'react-router-dom'
import {MyButton} from "../../shared/ui/myButton";
import {useAppDispatch} from "../../features/hooks";
import {removeUser} from "../../app/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(removeUser())
        navigate('/login')
    }

    return (
        <div className='navbar-side'>
            <div className="navbar__container">
                <div className="navbar__content">
                    <nav className='navbar__navigation'>
                        <NavLink to='/home' className='navigation__link'>Главная</NavLink>
                        <NavLink to='/tasks' className='navigation__link'>Задачи</NavLink>
                        <NavLink to='/realized' className='navigation__link'>Объекты</NavLink>
                    </nav>
                    <MyButton
                        buttonName='Выйти'
                        className='navbar__button-logout btn btn-primary'
                        onClick={logoutHandler}
                    />
                </div>
            </div>
        </div>
    )
}