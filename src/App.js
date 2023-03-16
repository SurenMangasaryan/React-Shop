import React, { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Context from './Context'
import Container from '../src/Components/Container/Container'
import './App.css'
import ScrollTop from './ScrollTop'


export default function App() {
    return (
        <BrowserRouter>
            <Context>
                <ScrollTop />
                <Container />
            </Context>
        </BrowserRouter>
    )
}
