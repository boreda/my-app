import React from 'react'
import Account from './Account'


class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            status: "Log In",
            logged: true

        }
        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount(){
    //     setTimeout(()=>{

    //     },2000)
    // }

    handleClick(){
        this.setState((prevState)=>{
            console.log(prevState);
            if(prevState.logged){
                return {
                    status: "Log Out",
                    logged: !prevState.logged
                }
            } else{
                return {
                    status: "Log In",
                    logged: !prevState.logged
                }
            }
        })
    }

    render(){
        return(
            <div>
                <Account userStatus={this.state.status} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default SignIn