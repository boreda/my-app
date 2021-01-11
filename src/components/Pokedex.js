import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

function Pokedex(props){
    // 1st part of Assigment
    // const data = [
    //     {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    //     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 278},
    //     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    //     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    //     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    //     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    // ]

    // const pokeCardComponent = data.map(card=>{
    //     return <Pokecard key= {card.id} name= {card.name} type= {card.type} base_experience= {card.base_experience} img={card.img} id={card.id}/>
    // })

    //2nd part of Assignment - PokeGame
    const pokeCardComponent = (props.data).map(card => {
        return <Pokecard key= {card.id} name= {card.name} type= {card.type} base_experience= {card.base_experience} img={card.img} id={card.id} />
    })

    return(
        <div className="Pokedex">
            {pokeCardComponent}
        </div>
    )
}
export default Pokedex