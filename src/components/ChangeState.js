import React from 'react';

class ChangeState extends React.Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(function(prevState){
            return {count: prevState.count+1}
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click me!!</button>
            </>
        )
    }
}
export default ChangeState;