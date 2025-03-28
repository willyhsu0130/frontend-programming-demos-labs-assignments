"use client";
import { CounterProvider } from "./CounterProvider";
import { useCounter } from "./CounterProvider";

export const Counter = () => {
    // Use the useCounter hook inside the CountProvider
    const { count, increment, decrement } = useCounter();

    return (
        <CounterProvider>
            <h1>Count: {count}</h1>
            <div className="flex justify-center gap-x-10">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </CounterProvider>
    );
};