import React, { Component } from 'react';
//import logo from './logo.svg';
import logo2 from './Age_of_Empires_2.png';
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
    var civilization = this.state.value;   

    axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/' + civilization).then( res => {
      
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
        <img src={logo2} /*className="App-logo"*/ alt="logo" />
      <div>
      <form>
        <label>
          <p>Indicar Civilización</p>
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
        <img src={logo2} /*className="App-logo"*/ alt="logo" />
      <div>
      <form>
        <label>
        <p>Indicar Civilización</p>
          <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      <div className="App-box">
        <p>Civilization: {this.state.response.name}</p>
        <p>Army Type: {this.state.response.army_type}</p>
        <p>Expansion: {this.state.response.expansion}</p>
        <p>Team Bonus: {this.state.response.team_bonus}</p>
      </div>
      </header>
    </div>
  );

    }
  }
}
export default App;
