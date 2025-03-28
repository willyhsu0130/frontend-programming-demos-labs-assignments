import { CounterProvider, useCounter } from "./CounterProvider"
export const DisplayCount = () => {
    const { count } = useCounter()
    return (
        <CounterProvider>
            <h1>Count: {count}</h1>
        </CounterProvider>
    )
}