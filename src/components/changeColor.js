import { useEffect, useState } from "react"
import "./changeColor.css"

const ChangeColorCompoent = () => {
    const LightMode = "Light"
    const DarkMode = "Dark"
    const [mode, setMode] = useState(LightMode)

    const switchMode = () => {
        if(mode === DarkMode) {
            setMode(LightMode)
            localStorage.setItem("display-mode", LightMode)
        } else {
            setMode(DarkMode)
            localStorage.setItem("display-mode", DarkMode)
        }
    }

    useEffect(() => {
        const displayMode = localStorage.getItem("display-mode")
        if(Boolean(mode) === false) {
            localStorage.setItem("display-mode", LightMode)
        }
        setMode(displayMode)   
    }, [mode])

    return (
        <div className={`color-container ${mode}`}>
            <div className="btn-container">
                <button 
                    className={`btn-${mode}`} 
                    onClick={switchMode}
                >
                    {mode === LightMode ? DarkMode : LightMode} mode
                </button>
                <h1 className={`h1-${mode}`}>{mode} Mode</h1>
            </div>        
        </div>
    )
}

export default ChangeColorCompoent