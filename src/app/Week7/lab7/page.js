"use client"
import { Counter } from "@/components/lab7/Counter"
import { DisplayCount } from "@/components/lab7/DisplayCount"
import { CounterProvider } from "@/components/lab7/CounterProvider"
import { Controls } from "@/components/lab7/Controls"
const Home = () => {
    return (
        <CounterProvider>
            <div className="flex flex-col justify-center h-screen">
                <div className="bg-blue-50 h-1/3">
                    <h1>Counter and buttons</h1>
                    <Counter />
                </div>
                <div className="bg-red-50 h-1/3">
                    <h1>Only Counter</h1>
                    <DisplayCount />
                </div>
                <div className="bg-zinc-50 h-1/3">
                    <h1>Buttons only</h1>
                    <Controls />
                </div>
            </div>
        </CounterProvider>

    )
}

export default Home