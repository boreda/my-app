import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import Main from './components/Main';
import Sate from './components/State';
import ChangeState from './components/ChangeState';
import Conditional from './components/Conditional';
import SignIn from './components/SignIn';
import Fetch from './components/Fetch'
import Form from './components/Form'
import TravelForm from './components/TravelForm'
import Capstone from './components/Capstone'
import Practise from'./components/Practise'
import SlotMachine from'./components/SlotMachine'
import fruits from './components/fruits'
import {choice, remove} from './components/helpers'
import Pokegame from './components/Pokegame'
import Clicker from './components/Clicker'

// let fruitComponent = choice(fruits);
// console.log(fruitComponent);

// let remaining = remove(fruits, fruitComponent);
// console.log(remaining)
// ReactDOM.render(<fruits />, document.getElementById('root'));

ReactDOM.render(<Clicker />, document.getElementById('root'));