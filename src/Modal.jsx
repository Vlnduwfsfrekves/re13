import { Component } from "react";
import ToDo from './ToDo.jsx'
import { Main,Button } from "./Modal.styled";
class Modal extends Component{
    state={
        statusOfModal:localStorage.getItem('status')===null?(false):(JSON.parse(localStorage.getItem('status')))
    }
    click(){
        this.setState({statusOfModal:false})
    }
    click2(){
        this.setState({statusOfModal:true})
    }
    componentDidMount(){
        let backdrop = document.querySelector('.backdrop')
        backdrop.addEventListener('click',(e)=>{if(e.currentTarget===e.target){this.setState({statusOfModal:false})}})
        window.addEventListener('keydown',(e)=>{if(e.code==='Escape'){this.setState({statusOfModal:false})}})
    }
    componentWillUnmount(){
        let backdrop = document.querySelector('.backdrop')
        backdrop.removeEventListener('click',(e)=>{if(e.currentTarget===e.target){this.setState({statusOfModal:false})}})
        window.removeEventListener('keydown',(e)=>{if(e.code==='Escape'){this.setState({statusOfModal:false})}})
    }
    componentDidUpdate(){
        localStorage.setItem('status',JSON.stringify(this.state.statusOfModal))
    }
    render(){
        return(
            <div>
            <Button onClick={()=>this.click2()}>inter</Button>
            <div className="backdrop" style={this.state.statusOfModal===true?({width: '100%',height: '100%',opacity: 1,zIndex: 2,backgroundColor: '#0003',padding: '15px',transition: 'opacity .25s cubic-bezier(.4, 0, .2, 1)',position: "fixed",top: 0,left: 0,paddingTop:'400px'}):({transition: 'opacity .25s cubic-bezier(.4, 0, .2, 1)',opacity: 0,pointerEvents: 'none'})}>
                <Main>
                    <Button onClick={()=>this.click()} type="button">quit</Button>
                    <ToDo/>
                </Main>
            </div>
            </div>
        )
    }
}
export default Modal