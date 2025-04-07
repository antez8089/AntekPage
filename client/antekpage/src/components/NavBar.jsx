import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function NavBar (){

    return (
        <div className='max-w-screen-xl'>
        <header className='fixed left-0 top-0 z-30 hidden max-w-screen-xl items-center justify-between bg-background px-4 py-4 text-responsive-h6 2xl:flex 2xl:px-40 2xl:pt-12'>
            <div className='animation'></div>
            <nav>
                <ul className='flex gap-6 uppercase'>
                    <li className='animation border-r border-text pr-6 transition-all last:border-0 hover:text-secondary'>
                        <CustomNavLink to ="/about">About</CustomNavLink>
                    </li>

                </ul>
            </nav>
        </header>
        </div>
    );
}
export default NavBar;

function CustomNavLink({to, children}) {
    return (
        <NavLink to={to} className={({isActive}) =>
        isActive ? "text-sky-600 rounded"
        : "block hover:text-sky-700 rounded"}
        >
            {children}
        </NavLink>
    )
}