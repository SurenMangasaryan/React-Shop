import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

export const MyContext = createContext();

export default function Context({ children }) {

    const [data, setData] = useState([]);
    const [prevData, setPrevData] = useState([]);
    const [recycleArr, setRecycleArr] = useState([]);
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [sureName, setSureName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [logEmail, setLogEmail] = useState('');
    const [checkUserName, setCheckUserName] = useState('');
    const [checkEmail, setCheckEmail] = useState('');
    const [total, setTotal] = useState(0);
    const naviagteLogin = useNavigate();
    const naviagteHomePage = useNavigate();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=9')
            .then((res) => {
                setData(res.data);
                setPrevData(res.data);
            })
    }, []);

    const validation = (value, length, func) => {
        func(value.target.value);
        if (value.target.value.length >= length) {
            value.target.style.background = 'green';
        } else if (value.target.value.length === 0) {
            value.target.style.background = 'transparent';
        } else {
            value.target.style.background = 'red';
        }
    }

    const checkValidLogin = (value, func) => {
        func(value.target.value);
        if (value.target.value === checkUserName && checkUserName.length > 0) {
            value.target.style.background = 'green';
        } else if (value.target.value.length === 0) {
            value.target.style.background = 'transparent';
        } else {
            value.target.style.background = 'red';
        }
    }

    const checkValidEmail = (value, func) => {
        func(value.target.value);
        if (value.target.value === checkEmail && checkEmail.length > 0) {
            value.target.style.background = 'green';
        } else if (value.target.value.length === 0) {
            value.target.style.background = 'transparent';
        } else {
            value.target.style.background = 'red';
        }
    }

    const localStorageValid = () => {
        if (userName.length >= 4 && name.length >= 3 && sureName.length >= 6 && email.length >= 6 && password.length >= 6) {
            localStorage.setItem(userName, JSON.stringify(
                {
                    userName: userName,
                    name: name,
                    sureName: sureName,
                    email: email,
                    password: password
                }));
            setUserName("");
            setName("");
            setSureName("");
            setEmail("");
            setPassword("");
            setCheckUserName(userName);
            setCheckEmail(email);
            naviagteLogin('/login');
        } else {
            console.log(null);
        }
    }

    const localCheckValid = () => {
        if (checkUserName.length > 0 && checkEmail.length > 0) {
            if (login === checkUserName && logEmail === checkEmail && logEmail !== undefined && logEmail !== undefined) {
                localStorage.setItem(userName, JSON.stringify({
                    login: login,
                    email: logEmail
                }));
                setLogin("");
                setLogEmail("");
                naviagteHomePage('')
            }
        }
    }

    const values = {
        data, setData,
        prevData,
        recycleArr, setRecycleArr,
        userName, setUserName,
        name, setName,
        sureName, setSureName,
        email, setEmail,
        password, setPassword,
        login, setLogin,
        logEmail, setLogEmail,
        total, setTotal,
        validation,
        localStorageValid,
        localCheckValid,
        checkValidLogin,
        checkValidEmail
    }

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}
