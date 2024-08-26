import { useState } from "react"

// interface CounterDetails{
//     counter:number
// }
const UseState:React.FC=()=>{
    const [counter,setCounter]=useState(0);

    const clickCounter=()=>{
          setCounter(counter+1);
    }
    const clickBack=()=>{
        setCounter(counter-1)
    }

    return(
        <>
        <div className="bg-container">
            <h1 className="count">Counter:{counter}</h1>
            <button className="button" onClick={clickCounter}>Click</button>
            <button className="btn2" onClick={clickBack}>Back</button>
        </div>
        </>
    )
}
export default UseState