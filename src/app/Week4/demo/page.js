"use client";

import { useState } from 'react';

const CounterFunction = () => {
    const [count, setCount] = useState(0);
    const [keyPressed, setKeyPressed] = useState("");
    const [bgColor, setBgColor] = useState("purple")

    const increment = () => {
        setCount(count + 1);
    };

    const handleKeyPress = (event) => {
        setKeyPressed(event.key);
    };

    const handleOnMouseOver = () => {
        setBgColor("red")
    }

    const handleOnMouseOut = () => {
        setBgColor("purple")
    }
    return (
        <div>
            <h3>Count Value: {count}</h3>
            <button onClick={increment}>Increment</button>
            <h3>You pressed: {keyPressed}</h3>
            <input className="border-solid border-black bg-emerald-50" onKeyDown={handleKeyPress} />
            <div
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                style={{ backgroundColor: bgColor }}
            >Change Color</div>
        </div>
    );
};

const ListItems = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const items = [1, 2, 3]
    const handleItemClick = (item) => {
        setSelectedItem(item)
    }
    return (
        <div>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))
                }
            </ul>
            {selectedItem && <p>You selected: {selectedItem} </p>}
        </div>

    )
}

const Home = () => {
    return (
        <>
            <CounterFunction />
            <ListItems />
        </>
    )
};

export default Home;