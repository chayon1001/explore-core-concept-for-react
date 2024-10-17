import { useState } from "react"

export default function Counter(){

   
    const [count, setCount] = useState(0);

    const addCount = ()=>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const reduceCount = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return(
        <div style={{border: '2px solid yellow' }}>
            <h2>Count:{count} </h2>
            <button onClick={addCount}>add</button>

            <button onClick={reduceCount}>reduce</button>

        </div>
    )
}