import { useState } from "react"

function Schet({}) {
    const [value, setValue] = useState(0)
    return (
        <>
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(value+=1)}>+</button>
            <button onClick={() => setValue(value-=1)}>-</button>
        </div>
        </>
    )
}
export default Schet