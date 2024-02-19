import React,{ Component } from 'react';
import { nanoid } from 'nanoid'
class TodoEditor extends Component{
    state={
        textValue: ''
    }
    change=(e)=>{
        this.setState({textValue:e.target.value})
    }
    render(){
    return(
        <div style={{border:'1px solid'}}>
        <label>
            <input style={{marginBottom:'20px',borderWidth:'3px'}} type="text" value={this.state.textValue} onChange={this.change}/>
            <br/>
            <button style={{color:'white',background:'green',borderColor:'white', width:'150px', height:'40px'}} onClick={()=>{this.props.add({id:nanoid(),text:this.state.textValue,completed:false});this.setState({textValue:''})}}>Create</button>
        </label>
        </div>
    )
    }
}
export default TodoEditor