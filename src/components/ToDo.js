import React from 'react';
import ToDoItem from './ToDoItem';
import toDoData from './toDoData';

// function ToDo(){
//     const styles = {
//         color: '#fff',
//         border: '2px solid #fff',
//         borderRadius: 5,
//         padding: 5
//     }
//     const ToDoList = [
//         {
//             id: 1,
//             name: "Learn React",
//             completed: true
//         },
//         {
//             id: 2,
//             name: "Practise the code",
//             completed: false
//         },
//         {
//             id: 3,
//             name: "Check Upstox Emails",
//             completed: false
//         },
//         {
//             id: 4,
//             name: "Earn Duolingo Points",
//             completed: false
//         }
//     ];

//     const toDoItemComponent = ToDoList.map((list)=> <ToDoItem key={list.id} item={list} /> )
//     return(
//         <div style={styles}>
//             {toDoItemComponent}
//         </div>
//     )
// }

class ToDo extends React.Component{
    constructor(){
        super()
        // const ToDoList = [
        //     {
        //         id: 1,
        //         name: "Learn React",
        //         completed: true
        //     },
        //     {
        //         id: 2,
        //         name: "Practise the code",
        //         completed: false
        //     },
        //     {
        //         id: 3,
        //         name: "Check Upstox Emails",
        //         completed: false
        //     },
        //     {
        //         id: 4,
        //         name: "Earn Duolingo Points",
        //         completed: false
        //     }
        // ];
        this.state = {
         toDoList: toDoData   
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(){
    //     console.log('clicked');
    //     this.setState(function(prevState){
    //         return {
    //             completed: true
    //         }
    //     });
    // }

    render(){
        const styles = {
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: 5,
            padding: 5
        }
    
        const toDoItemComponent = (this.state.toDoList).map((list)=> <ToDoItem key={list.id} item={list} /> )

        return(
            <div style={styles}>
                {toDoItemComponent}
            </div>
        )
    }
}

export default ToDo;