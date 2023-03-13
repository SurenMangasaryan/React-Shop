import React from 'react'
import { Route, Routes } from 'react-router'
import '../Container/Container.css'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import Login from '../Login/Login'
import Recycle from '../Recycle/Recycle'
import Registration from '../Registration/Registration'

export default function Container() {
    return (
        <>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/recycle' element={<Recycle />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />
                </Routes>
            </div>
        </>
    )
}
