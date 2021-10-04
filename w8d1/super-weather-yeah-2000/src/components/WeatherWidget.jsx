import { useEffect, useState } from "react"
import axios from "axios"

export default function WeatherWidget(props){
  
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    axios.get("/api/weather/toronto").then(res => setWeatherData(res.data))

  }, [])
  const {name, main, weather} = weatherData
  return (
    <>
    {name && 
    <div className="WeatherWidget">
      <p>{name}</p>
      <p>{Math.round(main.temp - 273)}</p>
      <p>{weather[0].description}</p>
    </div>
    }
    </>
  )
}