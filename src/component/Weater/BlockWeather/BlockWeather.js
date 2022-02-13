import React, {useState} from "react";

import './BlockWeather.css'

const BlockWeather = (weather) => {
    const [openCard, setOpenCard] = useState()
    const [deleteCard, setDeleteCard] = useState(false)
    let sunset = weather.weather.sys.sunset
    let date = new Date();
    date.setTime(sunset)
    if (!weather) return null
   const openCity = () => {
       console.log('click', weather.weather.name)
       setOpenCard(true)
        console.log(openCard)
   }

    return(
        <>
            {openCard ? ( deleteCard ? (<></>) :(
                <div>
                    <ul>
                        <div className="card-city">
                            <div className="btn-close pos" onClick={ ()=> setOpenCard(false)}/>
                            <div className="weather-info">
                                <p className="name">{`Погода в городе ${weather.weather.name} сегодня:`}</p><br/>
                                <p className="sky">{`${weather.weather.weather[0].description}`}</p>
                                <img className="img-weather"src={`http://openweathermap.org/img/wn/${weather.weather.weather[0].icon}.png`} alt='img-weather'/><br/>
                                <p>{`Температура: ${weather.weather.main.temp} °C, Ветер: ${weather.weather.wind.speed} м/с`}</p><br/>
                                <p>{`Давление: ${weather.weather.main.pressure}`}</p><br/>
                            </div>
                            <div className="remove" onClick={()=>setDeleteCard(true)}>удалить карточку</div>   
                        </div>    
                    </ul>
                </div>)
                ) : ( deleteCard ? (<></>) : (<li className="block-city" onClick={openCity}>{`Погода в городе ${weather.weather.name}`}</li>))}    
        </>
    )
}

export default BlockWeather