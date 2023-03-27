import { useEffect } from "react";

const Child = ()=>{
    useEffect(()=>{
        console.log('componentDidMount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    },[]);
    return(
        <>
            <div>Child component</div>
        </>
    )
}
export default Child