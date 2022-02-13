import React, { useState } from "react";
import './Login.css'


const Login = () => {

    const [authSuccess, setAuthSuccess] = useState(null)
      
    const checkData = (event) => {
        localStorage.clear()
        event.preventDefault()
        const name = event.target.elements.userName.value
        const password = event.target.elements.password.value
        name === "admin" && password === '12345' ? localStorage.setItem('auth', 'true') : alert('Введенные данные неверны')
        localStorage.getItem('auth', 'true') ? setAuthSuccess(true) : setAuthSuccess(false)
    }

    return (
    <>
            <div id="log">
                {authSuccess ? (<div className="success-log">
                            <p>Вы успешно вошли в аккаунт, приступайте с просмотру погоды!</p>
                    </div>)
                    :
                    (
                    <div className="login-form">
                        <form className="form-group" onSubmit={checkData}>
                            <label htmlFor="userName" className="form-label mt-4">Введите имя пользователя</label>
                            <input className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Имя пользователя" name="userName"/>
                            <label htmlFor="password" className="form-label mt-4">Пароль</label>
                            <input type="password" className="form-control" id="password" placeholder="Пароль" name="password"/>
                            <button className="btn-login">Войти</button>
                        </form>
                    </div>
                    )
                } 
            </div>
        </>
    )
}

export default Login