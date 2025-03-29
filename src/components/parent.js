import { useState } from "react"

const ParentComponent = () => {
    const [message, setMessage] = useState("Hello from Parent Compoent")

    return (
        <>
            <h2>Parent Component</h2>
            <ChildComponent message={message} setMessage={setMessage} />
        </>
    )
}

// Create another component called ChildComponent
const ChildComponent = (props) => {


    const addCounter = () => {
        props.setCouunt(prev => prev+=1)
    }

    return (
        <>
                <h3>Child Component</h3>
                <p>{props.message}</p>
                <button onClick={addCounter}>Add Counter </button>
        </>

    )
}