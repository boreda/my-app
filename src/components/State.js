import React from 'react';
import ReactDOM from 'react-dom';

// class State extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             name: "Dikshitha",
//             age: 14
//         }
//     }
//     render(){
//         return(
//             <>
//                 <h2>Name is {this.state.name}</h2>
//                 <div>Age is {this.state.age} </div>
//             </>
//         )
//     }
// }

// function State(props){
//     props.constructor = constructor;
//     console.log(props);
//     return(
//         <>
//             <h2>You're currently logged in</h2>
//         </>
//     )
// }

class Sate extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: false,
            in: "In",
            out: "Out"
        }
    }
    render(){
        return(
        <h2>You're currently logged {this.state.isLoggedIn == true? this.state.in : this.state.out}</h2>
        )
    }
}

export default Sate
