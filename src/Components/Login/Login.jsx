import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import '../Login/Login.css'

export default function Login() {

    const { login, setLogin, logEmail, setLogEmail, localCheckValid, checkValidLogin, checkValidEmail } = useContext(MyContext);

    const chechkValid = (e) => {
        e.preventDefault();
        localCheckValid();
    }

    return (
        <div className='login'>
            <form className='form-login' onSubmit={(e) => chechkValid(e)}>
                <label className='h1' htmlFor="inp">Enter your username</label>
                <input className='text-field__input inp' id='inp' type="text" value={login} onChange={(e) => {
                    checkValidLogin(e, setLogin);
                }} />

                <label className='h1' htmlFor="inp">Enter your email</label>
                <input className='text-field__input inp' id='inp' type="email" value={logEmail} onChange={(e) => {
                    checkValidEmail(e, setLogEmail);
                }} />

                <button className='btn-login btn-login-add'>Login</button>
            </form>
        </div>
    )
}
