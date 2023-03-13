import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'
import Login from './HeaderComponents/Login'
import Logo from './HeaderComponents/Logo'
import Recycle from './HeaderComponents/Recycle'
import Registration from './HeaderComponents/Registration'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-line'>
                <div>
                    <NavLink to='/'>
                        <Logo />
                    </NavLink>
                </div>

                <ul className='list'>
                    <li>
                        <NavLink to='recycle'>
                            <Recycle />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='login'>
                            <Login />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='registration'>
                            <Registration />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
