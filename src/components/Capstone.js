import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'

class Capstone extends React.Component{
    constructor(){
        super()
        this.state={


        }
    }
    render(){
        return(
            <div>
                <Header />
                <MemeGenerator/>
            </div>
        )
    }
}
export default Capstone
