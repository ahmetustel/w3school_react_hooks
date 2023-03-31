import { useEffect, useState } from "react";

const Counter = ()=>{

    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(1);

    useEffect(()=>{
        // setCalculation(()=> count*2);
        console.log('useEffect her seferinde çalışır');
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={()=>setCount((c)=>c+1)}>+</button>
        </>
    )
}
export default Counter