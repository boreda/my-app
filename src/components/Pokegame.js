import React, {Component} from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component{
    static defaultProps = {
        data: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 278},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };

    render(){
        let hand1 = [];
        let hand2 = [...this.props.data]
        while(hand1.length < hand2.length){
            let randomIndex = Math.floor(Math.random()*hand2.length)
            let randomPokecard = hand2.splice(randomIndex, 1)[0]
            hand1.push(randomPokecard);
        }

        return(
            <React.Fragment>
                <h1>Pokegame!!</h1>
                <Pokedex data={hand1}/>
                <Pokedex data={hand2}/>
            </React.Fragment>
        )
    }
}
export default Pokegame