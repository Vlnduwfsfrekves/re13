import React from 'react'
const TodoList=({todos,change,deleteT})=>{
    return(
        <ul style={{listStyle:'none'}}>
        {todos.map((task)=>(
            <li key={task.id} style={{border:'1px solid',marginBottom:'20px'}}>
                <input type="checkbox" checked={task.completed} onChange={()=>change(task.id)} style={{marginRight:'20px'}}/>
                <span style={{textDecoration:task.completed?'line-through':'none'}}>{task.text}</span>
                <button style={{color:'white',background:'green',borderColor:'white', width:'150px', height:'40px',marginLeft:'20px'}} onClick={()=>deleteT(task.id)}>Delete</button>
            </li>
        ))}
        </ul>
    )
}
export default TodoList