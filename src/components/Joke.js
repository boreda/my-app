import React from 'react';

// function Joke(props){
//     console.log(props);

//     const styles = {
//         color: '#fff',
//         margin: 10,
//         border: '2px solid #fff',
//         borderRadius: 5,
//         padding: 15,
//         width: '70%'
//     }
//     return(
//         <div style={styles}>
//             Question: {props.question} 
//             <br/> 
//             Punch line: {props.punchLine}
//         </div>
//     )
// }

class Joke extends React.Component{
    render(){
        const styles = {
            color: '#fff',
            margin: 10,
            border: '2px solid #fff',
            borderRadius: 5,
            padding: 15,
            width: '70%'
        }

        return(
            <div style={styles}>
                Question: {props.question} 
                <br/> 
                Punch line: {props.punchLine}
            </div>
        )
    }
}
export default Joke;