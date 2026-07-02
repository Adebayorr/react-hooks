import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const addToCount = () => setCount((prev) => prev + 1 )
    const reduceCount = () => setCount((prev) => prev - 1 )
    const resetCount = () => setCount(0)
    return (
        <>
            <h2>{count}</h2>
            <button onClick={addToCount}>Add</button>
            <button onClick={reduceCount}>Subtract</button>
            <button onClick={resetCount}>Reset</button>

        </>
    )
}

export default Counter