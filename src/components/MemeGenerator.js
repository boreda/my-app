import React from 'react'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "Top Text",
            bottomText: "Bottom Text",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response=>response.json())
        .then(data=>{
            const {memes} = data.data
            this.setState({
                allMemeImgs: memes
            })
        })
    }
    handleChange(event){
        console.log(this.state)
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick(event){
        event.preventDefault();
        console.log(this.state.allMemeImgs)
        // this.setState((prevState)=>{
        //     return {
        //         image: prevState.allMemeImgs[Math.floor(Math.random(prevState.randomNumber*this.state.allMemeImgs.length))].url
        //     }
        // })
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImg = this.state.allMemeImgs[randomNum].url
        this.setState({
            image: randomMemeImg
        })
    }
    render(){
        return(
            <div style={{padding: 10}}>
                <form>
                    <h2>MemeGenerator</h2>
                    <button onClick={this.handleClick}>GEN</button>
                    <label> {this.state.topText}
                        <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    </label><br/>
                    <img src={this.state.image} alt="generator" title="generator" /><br/>
                    <label> {this.state.bottomText}
                        <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    </label>
                </form>
            </div>
        )
    }
}
export default MemeGenerator