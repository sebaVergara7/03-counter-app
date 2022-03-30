import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

// const saludo = <h1>Hola Mundo</h1>;

// console.log( saludo );

const divRoot = document.querySelector('#root');

// console.log(divRoot);

// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku" />, divRoot);
// ReactDOM.render(<PrimeraApp saludo="Hola Mundo" />, divRoot);
// ReactDOM.render(<PrimeraApp saludo={123} />, divRoot);

// ReactDOM.render(<PrimeraApp />, divRoot);

ReactDOM.render(<CounterApp value={ 0 } />, divRoot);

