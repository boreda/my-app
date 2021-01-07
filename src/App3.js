import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

function App(){
    const jokesComponent=jokesData.map(joke=> <Joke question={joke.question} punchLine={joke.punchLine} />)
     
    return(
        <div className="todo-item">
            {jokesComponent}
        </div>
    )
}

export default App;