import React from 'react'

class Fetch extends React.Component{
    constructor(){
        super()
        this.state={
            something: {}
        }
    }

    componentDidMount(){
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then((response)=>response.json())
        .then(data=>console.log(data))
    }
    render(){ 
        console.log(this.state.something)
        return(
            <>
                <ul>
                
                </ul>
            </>
        )
    }
}
export default Fetch