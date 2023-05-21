import { memo } from "react";

const Todos1 = ({todos, addTodo})=>{

    console.log('child component olan Todos1 is rendering');
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((value, index)=>{
                return <p key={index}>{value}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}
export default memo(Todos1)