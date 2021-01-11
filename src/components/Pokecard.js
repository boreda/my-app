import React from 'react'
import './Pokecard.css'

function Pokecard(props){ 
    // const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

    function imageSrc(id) {
        let img
        if (id.toString().length === 1) {
            img = `${POKE_API}00${props.id}.png`
        } else if(id.toString().length === 2) {
            img = `${POKE_API}0${props.id}.png`
        } else {
            img = `${POKE_API}${props.id}.png`
        }
        return img
    }

    return(
        <div className="Pokecard">
            <h3>{props.name}</h3>
            <img src={imageSrc(props.id)} style={{width: 100}}/>
            <p>Type: {props.type}</p>
            <p>Experience: {props.base_experience}</p>
        </div>
    )
}
export default Pokecard