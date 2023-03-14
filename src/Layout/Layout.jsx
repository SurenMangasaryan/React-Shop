import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'

export default function Layout() {
    return (
        <>
            <Header />

            <Outlet />
        </>
    )
}
