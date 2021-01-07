import React from 'react';
import toDoData from './toDoData';
import '../index.css';

// function ToDoItem(props){
//     console.log(props)
//     return(
//         <p className="todo-item">
//             {props.item.id}<span><input type="checkbox" checked={props.item.completed}/></span> {props.item.name}
//         </p>
//     );
// }

class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toDoList: toDoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState((prevState)=>{
            (prevState.toDoList).map((list)=>{
                if(list.id === id){
                    list.completed = !list.completed
                }
            })
            return {completed: prevState.toDoList.completed}
        })
        
    }

    render(){
        const completedStyles = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return(
            <p className="todo-item" style={(this.props.item.completed)? completedStyles: null}>
                {this.props.item.id}<span><input type="checkbox" checked={this.props.item.completed} name="items" onClick={()=>this.handleChange(this.props.item.id)} /></span> {this.props.item.name}
            </p>
        )
    }
}
export default ToDoItem;
