import React, { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { MyContext } from '../../Context';
import '../Registration/Registration.css'

export default function Registration() {

    const [bool, setBool] = useState(false);
    const { userName, setUserName,
            name, setName,
            sureName, setSureName,
            email, setEmail,
            password, setPassword,
            validation, localStorageValid } = useContext(MyContext);

    return (
        <div className='registration'>
            <form className='form-login' onSubmit={(e) => {
                e.preventDefault();
                localStorageValid();
            }}>
                <input className='text-field__input inp' value={userName} type="text" placeholder='Enter your username' onChange={(e) => {
                    validation(e, 4, setUserName);
                }} />
                <input className='text-field__input inp' value={name} type="text" placeholder='Enter your name' onChange={(e) => {
                    validation(e, 3, setName);
                }} />
                <input className='text-field__input inp' value={sureName} type="text" placeholder='Enter your surename' onChange={(e) => {
                    validation(e, 6, setSureName);
                }} />
                <input className='text-field__input inp' value={email} type="email" placeholder='Enter your email' onChange={(e) => {
                    validation(e, 6, setEmail);
                }} />
                <div className='password-inp'>
                    <input className='text-field__input inp' value={password} type={bool ? "text" : "password"} placeholder="Enter your password" onChange={(e) => {
                        validation(e, 6, setPassword);
                    }} />
                    <FaEye className='eye' onClick={() => setBool(!bool)} />
                </div>
                <button className='btn-login'>Register</button>
            </form>
        </div>
    )
}
