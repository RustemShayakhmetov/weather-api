import React from "react";
import { Link } from "react-router-dom";

import './Nav.css'
const Nav = () => {
    return(
            <div className="navigation">
                <div className="navigation-image">
                    <div className="name-site">
                        <span className="text-site">Get</span>Weather
                        <span><img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-weather-summer-at-home-inipagistudio-lineal-color-inipagistudio.png" alt="img-weather"/></span>
                    </div>
                </div>
                <ul>
                    <div className="nav">
                        <li><Link to={`/`} className="link">Главная</Link></li>
                        <li><Link to={`/weather`} className="link">Погода</Link></li>
                        <li><Link to={`/profile`} className="link">Профиль</Link></li>
                        {localStorage.getItem('auth', 'true') ? <li className="login-success">Вход выполнен</li> : <li><Link to={`/login`} className="login">Войти в аккаунт</Link></li>}
                    </div>
                </ul>
            </div>
    )
}
export default Nav;