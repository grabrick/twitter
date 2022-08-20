import React, { useState } from "react";
// import { useEffect } from "react";
import backImg from '../../../src/images/backImage.png'
import authLogo from '../../../src/images/nav__logo.svg'
import { useHttp } from "../../hooks/http.hook";
import './AuthUser.css'

function AuthUser() {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    // useEffect(() => {

    // }, [error])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form})
            console.log("Data", data);
        } catch (e) {
            
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form})
            console.log("Data", data);
        } catch (e) {
            
        }
    }

    return (
        <div className="auth">
                <div className="auth__main_wrapper">
                        <img src={backImg} alt="img" className="auth__main_image" />
                    <div className="auth__main_input-wrapper">
                        <div className="auth__main_input-logo_wrapper">
                            <img src={authLogo} alt="img" className="auth__main_input-logo" />
                        </div>

                        <div className="auth__main_input-text_wrapper">
                            <p className="auth__main_input-text">welcome,<br /> this is my first social network</p>
                            <p className="auth__main_input-title">Sign in</p>
                            <div className="auth__main_input-user_wrapper">
                                <div className="text-field text-field_floating-2 auth__main_input-email_wrapper">
                                    <input type="email" placeholder="email" id="email" name="email" className="text-field__input auth__main_input-email" onChange={changeHandler} />
                                    <label className="text-field__label text-lable">Email</label>
                                </div>
                                <div className="text-field text-field_floating-2 auth__main_input-password_wrapper">
                                    <input type="password" placeholder="password" id="password" name="password" className="text-field__input auth__main_input-password" onChange={changeHandler} />
                                    <label className="text-field__label text-lable">Password</label>
                                </div>
                            </div>

                            <div className="auth__main_input-btn_wrapper">
                                <button className="auth__main_input-signin" onClick={loginHandler} disabled={loading}>To come in</button>
                                <button className="auth__main_input-signup" onClick={registerHandler} disabled={loading}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default AuthUser;