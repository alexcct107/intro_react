import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props) {
//  return <h1> {props.title} </h1>
//}

//const Hello = (props) => <h1>{props.title}</h1>

class Hello extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hola Terricolas Soy Iván" />
       <h2>"El hombre débil tiene sueños, el fuerte Voluntad"</h2>
       <p>Mundo estoy aprendiendo React y es una maravilla. <br /> Te invito a visitar mi página web dando click <a href="https://alexcct107.github.io/aztlan_portfolio/" target="_blank"> Aquí </a> </p>
       
      </header>
    </div>
  );
}

export default App;
