import { useEffect, useState, useRef } from "react";

const UseRef1 = () => {
    const [inputValue, setInputValue] = useState("");

    // const [count, SetCount] = useState(0);
    const count = useRef(0)


    useEffect(() => {
        // SetCount((count) => count + 1)
        count.current = count.current + 1
    });
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    )
}
export default UseRef1