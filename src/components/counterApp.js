import { useEffect, useState } from "react"
import "./counterApp.css"

const CounterAppComponent = () => {
    const [counter, setCounter] = useState(Number(localStorage.getItem("counter")))
    const [countBy, setCountBy] = useState(Number(localStorage.getItem("countBy")))
    const [error, setError] = useState("")
    const [isNegative, setIsNegative] = useState(localStorage.getItem("isNegative"))

    /*
        initCount will initiliaze the counter to 1 when page loads for the first time 
        initCountBy will initialize the countBy to 1 when page loads for the first time 
    */
    const initCounter = 1
    const initCountBy = 1
    const errorMsg = "Sorry, I am not programmed to handle both negative and positive numbers, Click below to handle negative numbers."

    const addCounter = () => setCounter(prev => prev += countBy)

    const subCounter = () => (((Number(counter) - countBy < 0)) && !!isNegative === false) ? setError(errorMsg): setCounter(prev => prev -= countBy)

    const handleCountBy = (e) => {
        const num = Number(e.target.value)
        setCountBy(num)
        localStorage.setItem("countBy",num)
    }

    const handleReset = () => {
        setCounter(0)
        setCountBy(1)
    }

    const handleNegative = () => {
        setIsNegative(true)
        localStorage.setItem("isNegative", true)
        setError("")
    }

    const handlePositive = () => {  
        if((Number(counter) - countBy <= 0)) {
            setCounter(0)
        }

        setIsNegative(false)     
        localStorage.setItem("isNegative", false)
    }

    // handleInitState function will initialize our program setting default values in localstorage
    const handleInitState = () => {
        const isNegativeSet = localStorage.getItem("isNegative")
        if(!!isNegativeSet === false) {
            localStorage.setItem("isNegative", false)
        }

        setError("")
        localStorage.setItem("counter", counter)

        const count = localStorage.getItem("counter")
        if(Boolean(count) === false) {
            localStorage.setItem("counter", initCounter)
        }

        const countBy = localStorage.getItem("countBy")
        if(Boolean(countBy) === false) {
            localStorage.setItem("countBy", initCountBy)
        } else {
            localStorage.setItem("countBy", countBy)
        }
    }

    useEffect(() => {
        handleInitState()
    }, [counter, countBy])

    return (
        <div className="counter-app-container">
            <h1>Counter App</h1>
            <br/>
            <div className="counter-app-form">
                <label htmlFor="countBy"><span>Add counter by :</span></label> <br/>
                <input id="countBy" value={countBy} onChange={handleCountBy}/>
            </div>

            {error && 
                <>
                    <br/>
                    <small>{error}</small>
                    <br/>
                    <button 
                        className="counter-app-click-me" 
                        onClick={handleNegative}
                    >
                        Click Me!
                    </button>
                </>
             }

            <p className="counter-app-counter">Counter: <span>{counter}</span> </p>

            <div className="counter-app-btn">
                <div>
                    <button onClick={addCounter}>Add</button>
                    <button onClick={subCounter}>Sub</button>
                </div>
                <br/>
                <div>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleNegative}>Negative + Positive</button>
                    <button onClick={handlePositive}>Positive Only</button>
                </div>                
            </div>         
        </div>
    )
}

export default CounterAppComponent