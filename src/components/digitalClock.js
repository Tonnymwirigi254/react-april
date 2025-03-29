import { useEffect, useState } from "react"
import "./digitalClock.css"

const DigitalClockComponent = () => {
    const [hours, setHours] = useState("")
    const [mins, setMins] = useState("")
    const [secs, setSecs] = useState("")

    const checkTime = () => {
        const interval = setInterval(() => {
            const time = new Date()
            const hrs = time.getHours()
            const mins = time.getMinutes()
            const secs = time.getSeconds()

            setHours(hrs)
            setMins(mins)
            setSecs(secs)
        }, 1000)

        return () => clearInterval(interval)
    }

    useEffect(() => {
        checkTime()
    }, [hours, mins, secs])

    return (
        <div className="digital-clock-container">
            <h1>Digital Clock</h1>
            <br/>
            <div className="digital-clock-elements">
                <span>
                    {hours <= 9 ? "0" + hours : hours}:
                    {mins <= 9 ? "0" + mins : mins}:
                    {secs <= 9 ? "0" + secs : secs}
                </span>
            </div>
        </div>
    )
}

export default DigitalClockComponent