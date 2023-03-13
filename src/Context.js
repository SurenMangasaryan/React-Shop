import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const MyContext = createContext();

export default function Context({ children }) {

    const [data, setData] = useState([]);
    const [prevData, setPrevData] = useState([]);
    const [recycleArr, setRecycleArr] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=9')
            .then((res) => {
                setData(res.data);
                setPrevData(res.data);
            })
    }, []);

    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [sureName, setSureName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [logEmail, setLogEmail] = useState('');
    const [checkUserName, setCheckUserName] = useState('');
    const [checkEmail, setCheckEmail] = useState('');

    const validation = (value, length, func) => {
        if (value.target.value.length >= length) {
            func(value.target.value);
            value.target.style.background = 'green';
        } else {
            value.target.style.background = 'transparent';
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
            setCheckUserName(userName);
            setCheckEmail(email);
        } else {
            console.log(null);
        }
    }

    const localCheckValid = () => {
        if (login === checkUserName && logEmail === checkEmail) {
            localStorage.setItem(userName, JSON.stringify({
                login: login,
                email: logEmail
            }));
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
        validation,
        localStorageValid,
        localCheckValid
    }

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}
