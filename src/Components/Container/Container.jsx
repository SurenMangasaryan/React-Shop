import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../../Layout/Layout'
import '../Container/Container.css'
import HomePage from '../HomePage/HomePage'
import Login from '../Login/Login'
import Recycle from '../Recycle/Recycle'
import Registration from '../Registration/Registration'

export default function Container() {
    return (
        <>
            <div className='container'> 
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='' element={<HomePage />} />
                        <Route path='recycle' element={<Recycle />} />
                        <Route path='login' element={<Login />} />
                        <Route path='registration' element={<Registration />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}
