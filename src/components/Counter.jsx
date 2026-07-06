import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const addToCount = () => setCount((prev) => prev + 1 )
    const reduceCount = () => setCount((prev) => prev - 1 )
    const resetCount = () => setCount(0)
    return (
        <div className="counter">
           <div className="counter-gui">
                <button 
                    onClick={addToCount}
                    className="counter-btn"
                >Add</button>
                <h2 className="count-value">{count}</h2>
                <button 
                    onClick={reduceCount}
                    className="counter-btn"
                >Sub</button>
           </div>
            <button 
                onClick={resetCount}
                className="counter-btn"
            >Reset</button>

        </div>
    )
}

export default Counter