import React from 'react'
import itemData from './itemData'

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state={
            itemData: itemData,
            first: "Practise",
            last: "Practise ReactForm",
            ch: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }
    handleChange(id) {
        this.setState((prevState)=>{
            prevState.itemData.map((list)=>{
                if(list.id == id){
                    list.completed = !list.completed
                }
            })
            return {completed: prevState.itemData.completed}
        })
    }

    handleForm(event){
        const {name, value, type, checked} = event.target
        type=="checkbox"? this.setState({[name]: checked}): this.setState({[name]: value})
    }
    render(){
        return(
            <div>
                <form>
                    <label>
                        Item 1: {this.props.list.name} <input type="checkbox" checked={this.props.list.checked} onChange = {()=>this.handleChange(this.props.list.id)} checked={this.props.list.completed}/>
                    </label>
                    <input name="first" value={this.state.first} onChange = {this.handleForm} checked="checked"/>
                    <input type="checkbox" name="first" value={this.state.first} onChange = {this.handleForm} checked={this.state.ch}/>
                    {this.state.first}
                </form>
            </div>
        )
    }
}
export default Item