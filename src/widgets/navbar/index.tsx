import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__container">
                <div className="navbar__content">
                    <nav className='navbar__navigation'>
                        <NavLink to='/home' className='navigation__link'>Главная</NavLink>
                        <NavLink to='/tasks' className='navigation__link'>Задачи</NavLink>
                        <NavLink to='/realized' className='navigation__link'>Объекты</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}