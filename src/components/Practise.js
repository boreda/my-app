import React from 'react'
import Item from  './Item'
import itemData from './itemData'
import '../index.css'

class Practise extends React.Component{
    constructor(props){
        super(props)
        this.state={
            itemData: itemData
        }
    }
    render(){
        const itemDataComponent = (this.state.itemData).map(item=>{
            return <Item name={item.name} key={item.id} list = {item}/>
        })
        return(
            <div>
                {itemDataComponent}
            </div>
        )
    }
}
export default  Practise