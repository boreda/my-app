import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            first: 'Michael',
            last: 'Jackson',
            textarea: "This is sample Text area content",
            check: true,
            color: "Red"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){

    }
    handleChange(event){
        console.log(event);
        const {name, value, type, checked} = event.target;
        type == "checkbox"? this.setState({[name]: checked}):this.setState({[name]: value})
    }
    render(){
        return(
            <form onSubmit>
            <h1>This is Form Class component</h1>
            <input type="text" name="first" onChange={this.handleChange} value={this.state.first}/>
            <input type="text" name="last" onChange={this.handleChange} value={this.state.last}/>
            <label>{this.state.first} {this.state.last}</label>
            <br />
            <br />
            <textarea value={this.state.textarea} onChange={this.handleChange} name="textarea"/><br/>
            {this.state.textarea}<br />

            <input type="checkbox" name="check" checked={this.state.check} onChange={this.handleChange}/><br />
            <select value={this.state.color} name="color" onChange={this.handleChange}>
                <option>Red</option>
                <option>White</option>
                <option>Green</option>
            </select>
            <label>{this.state.color}</label>
            </form>
        )
    }
}
export default Form