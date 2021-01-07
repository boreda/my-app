import React from 'react'

class TravelForm extends React.Component{
    constructor(){
        super()
        this.state={
            first: "",
            last: "",
            place: "Himalayas",
            age: 40,
            kosher: true,
            lactose: false,
            chocolates: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"? this.setState({[name]: checked}):  this.setState({[name]: value})
    }
    handleSubmit(e){
        e.preventDefault();
        alert(  
            "First: "+ this.state.first+
            "last: "+ this.state.last+
            "Age: "+ this.state.age+
            "Place: "+ this.state.place+
            "Diet: "+ this.state.kosher
            );
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Please fill the Travel Form</h1>
                <label>First Name:
                    <input type="text" name="first" value={this.state.first} placeholder="First Name" onChange={this.handleChange}/>
                </label><br/>
                <label>Last Name:
                    <input type="text" name="last" value={this.state.last} placeholder="Last Name" onChange={this.handleChange} />
                </label><br/>
                <label>Age:
                    <input type="number" name="age" value={this.state.age} placeholder="Last Name" onChange={this.handleChange} />
                </label><br/>
                <label>Diet Preferences:
                    <input type="checkbox" name="kosher" value={this.state.kosher} checked={this.state.kosher} onChange={this.handleChange}/>
                    <input type="checkbox" name="lactose" value={this.state.lactose} checked={this.state.lactose} onChange={this.handleChange}/>
                    <input type="checkbox" name="chocolates" value={this.state.chocolates} checked={this.state.chocolates} onChange={this.handleChange}/>
                </label><br/>
                <label>Select the State/City: 
                <select value={this.state.place} name="place" onChange={this.handleChange}>
                    <option>Himalayas</option>
                    <option>Goa</option>
                    <option>Kasol</option>
                    <option>Rohtang</option>
                </select>
                </label><br/>
                <br />
                <br />
                <div>
                    <ul>
                        <li>First Name: {this.state.first}</li>
                        <li>Last Name: {this.state.last}</li>
                        <li>Age :{this.state.age}</li>
                        <li>State/City: {this.state.place}</li>
                    </ul>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
export default TravelForm