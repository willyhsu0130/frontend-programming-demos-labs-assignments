import { CounterProvider, useCounter } from "./CounterProvider"
export const Controls = () => {
    const { increment, decrement } = useCounter()
    return (
        <CounterProvider>
             <div className="flex justify-center gap-x-10">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </CounterProvider>
    )
}