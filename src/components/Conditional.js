import React from 'react';
import ConditionalComponent from './ConditionalComponent'

class Conditional extends React.Component{
    constructor(){
        super()
        this.state={
            loading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 3000)
    }

    render(){
        return(
            this.state.loading ? 
            <h1>Loading the component ....</h1> :
            <ConditionalComponent loading={this.state.loading}/>
        )
    }
}
export default Conditional