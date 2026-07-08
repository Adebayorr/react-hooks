import { useState, useRef, useEffect } from "react"

function SearchBox() {
    const inputRef = useRef(null)
    const renderCountRef = useRef(0)
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        renderCountRef.current += 1
    })

    useEffect(() =>{
        let inputElem = inputRef.current
        inputElem.focus()
    }, [])

    const updateInput = (event) => {
        setInputValue(event.target.value)

    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter search query"
                ref={inputRef}
                value={inputValue}
                onChange={updateInput}
            />
            <p>{inputValue}</p>
            <p>Renders: {renderCountRef.current}</p>

        </div>
    )
}

export default SearchBox