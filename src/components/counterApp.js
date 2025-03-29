import { useEffect, useState } from "react"

const CounterAppComponent = () => {
    const [counter, setCounter] = useState(localStorage.getItem("counter"))
    const [countBy, setCountBy] = useState(1)
    const [error, setError] = useState("")
    const [isNegative, setIsNegative] = useState(localStorage.getItem("isNegative"))

    const addCounter = () => {
        setCounter(prev => prev += countBy)
    }

    const subCounter = () => {
        if(((Number(counter) - countBy < 0) || counter < 0) && !!isNegative === false)  {
            setCounter(counter)
            setError("Sorry, I am not programmed to handle negative number, click here to handle negative numbers!")
        } else {
            setCounter(prev => prev -= countBy)
        }
    }

    const handleCountBy = (e) => {
        const num = Number(e.target.value)
        setCountBy(num)
    }

    const handleReset = () => {
        setCounter(0)
        setCountBy(1)
    }

    const handleNegative = () => {
        setIsNegative(true)
        localStorage.setItem("isNegative", true)
    }

    const handlePositive = () => {  
        if((Number(counter) - countBy <= 0)) {
            setCounter(0)
        }
        setIsNegative(false)     
        localStorage.setItem("isNegative", false)
    }

    useEffect(() => {
        const isNegativeSet = localStorage.getItem("isNegative")
        if(!!isNegativeSet === false) {
            localStorage.setItem("isNegative", false)
        }
        setError("")
    }, [counter])

    return (
        <>
            <h1>Counter App</h1>

            <div>
                <label htmlFor="countBy">Add counter by:</label>
                <input id="countBy" value={countBy} onChange={handleCountBy}/>
            </div>

            {error && 
                <>
                    <br/>
                    <small>{error}</small>
                    <button onClick={handleNegative}>Click Me</button>
                </>
             }

            <p>Counter: {counter}</p>

            <div>
                <button onClick={addCounter}>Add</button>
                <button onClick={subCounter}>Sub</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleNegative}>Negative + Positive</button>
                <button onClick={handlePositive}>Positive Only</button>
            </div>         
        </>
    )
}

export default CounterAppComponent