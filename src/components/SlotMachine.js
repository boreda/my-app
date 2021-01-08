import { render } from '@testing-library/react'
import React from 'react'


function Slot(props){
    const {x, y} = props;
    let slot = ((x == y)) ? "WIN" : "LOSE";
    let z = "!".repeat(props.z)
    return(
        <React.Fragment>
            <h2>{props.x} {props.y} {props.z}</h2>
            <p>{slot} {z}</p>
        </React.Fragment>
    )
    
}
function SlotMachine(){
    return(
        <div>
            <h1>Slot Machine</h1>
            <Slot x="x" y="x" z={2}/>
            <Slot x="y" y="x" z={10}/>
        </div>
    )
}
export default SlotMachine