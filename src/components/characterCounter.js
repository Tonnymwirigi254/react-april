import { useEffect, useState } from "react"
import "./characterCounter.css"

const CharacterCounterComponent = () => {
    const [text, setText] = useState(localStorage.getItem("character"))
    const [countCharacter, setCountCharacter] = useState(0)

    const handleCharacters = (e) => {
        const char = e.target.value
        setText(char)
        localStorage.setItem("character", char)

        let count = 0
        for(let i = 1; i <= char.length; i++) {
            count += 1
        }

        setCountCharacter(count)
    }

    const charactersPresent = (c) => {
        if(!!c) {
            let count = 0
            for(let i = 1; i <= c.length; i++) {
                count += 1
            }
            setCountCharacter(count)
        }
    }

    const handleClearText = () => {
        localStorage.setItem("character", "")
        setCountCharacter(0)
        setText("")
    }

    useEffect(() => {
        const char = localStorage.getItem("character")
        charactersPresent(char)
    }, [text, countCharacter])

    return (
        <div>
            <div className="character-counter-container">
            <h1>Character Counter</h1>
                <p>{countCharacter} characters</p>
                <div className="character-counter-form">
                    <label htmlFor="character-counter">
                        Write message below to count characters:
                    </label> 
                    <br/>
                    <textarea id="character-counter" value={text} placeholder="Type message here..." onChange={handleCharacters}></textarea>
                    <button onClick={handleClearText}>Clear Text Box</button>
                </div>
            </div>
        </div>
    )
}

export default CharacterCounterComponent