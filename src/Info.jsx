import React from 'react'
const Info=({tasks})=>{
    return (
        <div>
            <p>Всього завданнь: {tasks.length}</p>
            <p>Виконано: {tasks.filter((task)=>task.completed).length}</p>
        </div>
    )
}
export default Info