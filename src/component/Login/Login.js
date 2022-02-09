import React from "react";
import Nav from "../Nav/Nav";

import './Login.css'
const Login = () => {

const checkData = () => {
    // console.log('yess')
}

    return(
        <div>
            <Nav/>
            <div className="login-form">
                <div className="form-group">
                    <label htmlFor="userName" className="form-label mt-4">Введите имя пользователя</label>
                    <input className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Имя пользователя"/>
                    <label htmlFor="password" className="form-label mt-4">Пароль</label>
                    <input type="password" className="form-control" id="password" placeholder="Пароль"/>
                </div>
                <div className="btn-login" onClick={checkData}>Войти</div>
            </div>
        </div>

    )
}

export default Login