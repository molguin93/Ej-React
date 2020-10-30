import React, { Component } from 'react';
//import logo from './logo.svg';
import logo2 from './dungeons-dragons.png';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {

    response: [],
    estado: null

  };

  handlerText(e){
    var campoTexto = e.target.value;
    this.setState({value : campoTexto});
    //console.log(campoTexto)
  }  

  handlerButton = () => {
    var monster = this.state.value;   

    axios.get('https://www.dnd5eapi.co/api/monsters/' + monster)
        .then( res => {
        console.log(res.data);
        this.setState({
          response: res.data,
          estado: true
        });
    });

  }


render(){

if(this.state.estado !== true){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} /*className="App-logo"*/ alt="logo" width="500" />
      <div>
      <form>
        <label>
          <p class="titulo">Indicar Monstruo</p>
          <p class="ejemplos">Ejemplos: aboleth, acolyte, adult-black-dragon, giant-elk y nightmare</p>
          <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      </header>
    </div>
  );
}else{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} /*className="App-logo"*/ alt="logo" width="500" />
      <div>
      <form>
        <label>
        <p class="titulo">Indicar Monstruo</p>
        <p class="ejemplos">Ejemplos: aboleth, acolyte, adult-black-dragon, giant-elk y nightmare</p>
          <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      <div className="App-box">
        <p>Name: {this.state.response.name}</p>
        <p>Size: {this.state.response.size}</p>
        <p>Type: {this.state.response.type}</p>
        <p>Alignment: {this.state.response.alignment}</p>
        <p>Hit Points: {this.state.response.hit_points}</p>
      </div>
      </header>
    </div>
  );

    }
  }
}
export default App;
