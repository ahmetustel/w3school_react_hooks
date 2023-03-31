import {useRef, useState, useEffect} from 'react'

const UseRef3 = ()=>{
    const [inputValue, SetInputValue] = useState('');
    const prevInputValue = useRef('');

    useEffect(()=>{
        prevInputValue.current = inputValue;
    },[inputValue])
    return(
        <>
            <input type='text' value={inputValue} onChange={(e)=> SetInputValue(e.target.value)}/>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {prevInputValue.current}</h2>
        </>
    )
}
export default UseRef3