import { useState, useCallback } from "react";
import Todos1 from './Todos1'

const UseCallback1 = ()=>{

    const [count, setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    // "count" state'ini güncelleyen fonksiyon
    const increment = ()=>{
        setCount((c)=>c+1);
        console.log("count state render OLDU");
    }

    // "todos" state'ini güncelleyen fonksiyon
    // const addTodo = ()=>{
    //     setTodos( (t)=> [...t, "New Todo"] )
    //     console.log("todos state render OLDU!");
    // }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
        console.log("todos state render OLDU!");
      }, [todos]);

    return (
        <>
           <Todos1 todos={todos} addTodo={addTodo} />
           <hr/>
           <div>
            Count: {count}
            <button onClick={increment}> + </button>
           </div>
        </>
    )
}
export default UseCallback1