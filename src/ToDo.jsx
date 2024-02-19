import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import Info from './Info';
import todos from './todo.json';
class App extends Component{
    state = {
        todos: localStorage.getItem('todos')===null?(todos):(JSON.parse(localStorage.getItem('todos'))),
        filter: '',
    }
    addTask=newT=>{
        this.setState({todos:[...this.state.todos, newT]});
    }
    change=taskId=>{
        this.setState({todos:this.state.todos.map((task)=>task.id===taskId?{ ...task,completed:!task.completed }:task)})
    }
    deleteTask=del=>{
        this.setState({todos: this.state.todos.filter((task)=>task.id!==del)})
    }
    filterCh=filterValue=>{
        this.setState({filter:filterValue})
    }
    componentDidUpdate(){
        localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
    render(){
    let filter=this.state.todos.filter((task)=>task.text.toLowerCase().includes(this.state.filter.toLowerCase()))
    return(
        <div>
        <Info tasks={this.state.todos}/>
        <TodoEditor add={this.addTask}/>
        <Filter filter={this.filterCh}/>
        <TodoList todos={filter} change={this.change} deleteT={this.deleteTask}/>
        </div>
    )
    }
}
export default App