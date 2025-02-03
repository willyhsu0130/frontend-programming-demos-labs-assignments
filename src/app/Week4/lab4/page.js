"use client"
import { useState } from 'react'

const Home = () => {
    return (
        <div className="p-10">
            <h1 className="text-2xl bold mb-2">Task2</h1>
            <ToggleButton />
            <h1 className="text-2xl bold mb-2">Task3</h1>
            <FormSubmission/>
            <h1 className="text-2xl bold mb-2">Task4</h1>
            <ConditionalRendering/>
            <h1 className="text-2xl bold mb-2">Task5</h1>
            <HoverInteraction/>
        </div>
       
    )
}
const ToggleButton = () => {
    const [display, setDisplay] = useState("block")
    const [buttonValue, setButtonValue] = useState("Hide")
    const onClick = () => {
        setDisplay(display === "none" ? "block" : "none")
        setButtonValue(buttonValue === "Show" ? "Hide":"Show")
    }
    return (
        <div>
            <button
                onClick={onClick}>{buttonValue}
                </button>
            <h3
                style={{ display: display }}
            >Hello World</h3>
        </div>
    )
}

const FormSubmission = () =>{
    const [inputResult, setInputResult] = useState(null)
    const onSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        setInputResult(formJson.text != "" ? "Success" : "Failure")
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Enter stuff</label>
            <input className="text-black" name="text"></input>
            <button>Submit</button>
            {inputResult && <h3>{inputResult}</h3>}
        </form>
    )
}

const ConditionalRendering = () =>{
    const [filter, setFilter] = useState(null)
    const items = [
        {name: "Item1", status: "active"},
        {name: "Item2", status: "inactive"},
        {name: "Item3", status: "active"},
        {name: "Item4", status: "active"},
        {name: "Item5", status: "inactive"},
        {name: "Item6", status: "active"},
        {name: "Item7", status: "inactive"}
    ]
    const filteredItems = items.filter((item) => (item.status === filter))
    return(
        <div>
            <h2>Item List</h2>
            <button onClick={() => {setFilter('active')}}>Show Active</button>
            <button onClick={() => {setFilter('inactive')}}> Show Inactive</button>
            <ul>
                {
                    filter && filteredItems.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const HoverInteraction = () =>{
    const [bgColor, setBgColor] = useState('green')
    const handleOnMouseOver = () =>{
        setBgColor('red')
    }

    const handleOnMouseOut = () =>{
        setBgColor('green')
    }
    return(
        <div
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
            style={{background: bgColor}}
        >
            <p>This is some text blah blah blah</p>
        </div>
    )
}

export default Home