import React from 'react'

function Account(props){
    return(
        <div>
            <h3>Account Sign In page</h3>
            <button onClick={props.handleClick}>Please {props.userStatus}</button>
        </div>
    )
}
export default Account