"use client"

import { WeatherApp } from "@/app/Week3/demo/WeatherApp"
import { useRef } from 'react'

const Home = () =>{
    const inputRef = useRef(null)

    const focusInput = ()=>{
        inputRef.current.focus()
    }
    return(
        <div>
            <input
                ref={inputRef}
            ></input>
            <button onClick={focusInput}>
                Focus Input
            </button>
            <WeatherApp/>
        </div>
    )

}

export default Home