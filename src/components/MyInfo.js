import React from 'react';
import ToDo from './ToDo';
import '../index.css';

// function-based component
// function MyInfo(){
//     return(
//         <div className="todo-list">
//             <h1>Paramahansa Yogananda</h1>
//             <p>Autobiography of a Yogi</p>
//             <ToDo />
//         </div>
//     )
// }

// class-based component
class MyInfo extends React.Component{
    render(){
        return(
            <div className="todo-list">
                <h1>Paramahansa Yogananda</h1>
                <p>Autobiography of a Yogi</p>
                <ToDo />
            </div>
        )
    }
}

export default MyInfo;