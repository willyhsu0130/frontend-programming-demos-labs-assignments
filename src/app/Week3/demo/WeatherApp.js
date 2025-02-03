"use client"

import { useState } from "react";

export const WeatherApp = () =>{
    const [temperature, setTemperature] = useState(null)

    const fetchTemperature = () =>{
        const newTemperature = 25
        setTemperature(newTemperature)
    }
    return(
        <div>
            <h1>{temperature}</h1>
            <button
            onClick={fetchTemperature}>
              Fetch Temperature  
            </button>
        </div>
    )
}