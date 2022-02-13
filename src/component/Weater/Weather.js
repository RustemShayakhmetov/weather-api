import React, {useState} from "react";
import BlockWeather from "./BlockWeather/BlockWeather";

import './Weather.css'
const API_KEY = "eafc64dc1fbe08e763bc0f807d8f46cb"

const Weather = () => { 

    const [dataCity, setDataCity] = useState([])

    const gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value
        const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if(api_url.ok){
            const data = await api_url.json();
            //проверяем есть ли такой город, если есть повтор, то записываем в массив flag значение true
            let flag =[];
            console.log(dataCity)
            dataCity.forEach((city)=>{
                (city.id === data.id) ? flag.push(true) : flag.push(false)})
            if (!flag.includes(true) && city){
            setDataCity((prev)=> {
                return ([...prev, data])
            })
            } else if (!city) alert('Введите город в поле')
            else alert('Введенный город уже есть в списке')
            console.log(data)
        }
        else alert(`Город ${city} не найден`)
    }
    return(
        <>
            <form className="input-group mb-3" onSubmit={gettingWeather}>
                <input type="text" name="city" className="form-control" placeholder="Введите город"/>
                <button className="btn btn-primary click">Узнать погоду</button>
            </form>
            {dataCity.map((city) => { 
                return <BlockWeather key={`${city.id}`} weather={city} />
            })}
        </>
    )}

export default Weather
