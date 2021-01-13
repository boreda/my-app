import React from 'react'

class Clicker extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let rand = Math.floor(Math.random()*10);
        this.setState({
            num: rand
        })
    }
    render(){
        return(
            <div>
                <h1>Number: {this.state.num}</h1>
                {
                    this.state.num ===7 ?
                    <div>You WON !!!</div> :
                    <button onClick={this.handleClick} >Click me</button>
                }
            </div>
        )
    }
}

export default Clicker