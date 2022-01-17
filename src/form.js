import React, {useState} from 'react'
import Widget from './widget'
import './App.css'

const Form = () => {
    const [input, setInput] = useState('')
    const [weatherData, setWeatherData] = useState([])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d7c5fa92f7dafe6a837123484008f235`

    const fetchData = async(e) => {
        e.preventDefault()
        const data = await fetch(url)
        const response = await data.json()
        setWeatherData((weatherData) => {
            return[...weatherData, response]
        }) 
        console.log(response)
        setInput('')
    }

    return (
        <>
        <div className="inputcontainer">
            <form>
                <input 
                className="cityInput"
                type="text"
                placeholder='Enter city name'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn" onClick={fetchData}>+</button>
            </form>
        </div> 
        {weatherData.map((weather) => {
            return(
                <Widget
                key={weather.id}
                city={`${weather.name}, ${weather.sys.country}`}
                temp={Math.round((weather.main.temp * 9/5) - 459.67) + "°F"}
                icon={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'}
                desc={weather.weather[0].description} 
                />
            )
        })
        }
        </>        
    )
}

/*switch weather btwn Fahrenheit or Celsius
const celcius =  Math.round(get.main['temp'] - 273.15) + "°C";
const fahrenheit =  Math.round((get.main['temp'] * 9/5) - 459.67) + "°F";
locationTemp.addEventListener("click", function (){
    if(locationTemp.textContent === '°F' || locationTemp.textContent === fahrenheit){
        locationTemp.innerHTML = celcius;
    } else {
        locationTemp.innerHTML = fahrenheit;
    }
})
*/

export default Form
