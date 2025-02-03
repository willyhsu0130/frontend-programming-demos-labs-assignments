// counter.js
"use client";

import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div >
                <p className="text-center">Count: {count}</p>
                <div className="flex justify-center">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-blue-50 p-5 rounded-xl mx-1"
                    >Increment</button>
                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-green-50 p-5 rounded-xl mx-1"
                    >Decrement</button>
                </div>

            </div>

        </>
    );
};