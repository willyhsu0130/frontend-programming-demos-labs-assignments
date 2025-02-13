"use client"

import { useState } from 'react'
export const ItemList = () => {
    const [list, setList] = useState(["advertisement", "add", "three", "four", "tasks"]);
    const [inputValue, setInputValue] = useState('')
    const [showOnlyA, setShowOnlyA] = useState(false)

    const addToList = (e) => {
        e.preventDefault()
        setList([...list, inputValue])
        setInputValue('')
    }

    const removeFromList = (index) => {
        setList(list.filter((_, i) => i !== index))
    }

    const filteredList = showOnlyA
        ? list.filter((item) => item.toLowerCase().startsWith("a"))
        : list;

    return (
        <>
            <ul>
                {
                    filteredList.map((item, index) => (
                        <li key={index}>
                            <span className="mr-5">{item}</span>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => { removeFromList(index) }}
                            >Delete </button>
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={addToList}>
                <input
                    name="input"
                    className="border px-3 py-1 rounded"
                    value={inputValue}
                    placeholder="Add new item..."
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                />
                <button type="submit">
                    Add Item
                </button>
            </form>
            <label className="flex items-center space-x-2 mb-2">
                <input
                    type="checkbox"
                    checked={showOnlyA}
                    onChange={() => setShowOnlyA(!showOnlyA)}
                />
                <span>Show Only Items Starting with A</span>
            </label>

        </>
    )
}