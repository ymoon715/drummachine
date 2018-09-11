import React, { Component } from 'react';
import './App.css';
import Pianos from './components/Pianos'
import Drums from './components/Drums'

class App extends Component {
  state = {
    note: '-',
    volume: 0.5
  }
  volumeHandler = this.volumeHandler.bind(this);
  noteHandler = this.noteHandler.bind(this);

  volumeHandler(e){
    this.setState({volume: e.target.value})
  }
  noteHandler(f){
    this.setState({note: f})
  }
  render() {
    [].slice.call(document.getElementsByClassName('sound')).forEach(a=>{
      a.volume = this.state.volume
  })
    return (
      <div className="App">
      <div className="Controls">
            <div className="stateBar">{this.state.note}</div>
            <div className="volume"><input type="range" onChange={this.volumeHandler} min="0" max="1" step="0.01" value={this.state.volume}/></div>
          </div>
        <div className="soundCont">
          
          <Drums update={this.noteHandler} />
          
          <Pianos update={this.noteHandler} />
        </div>
      </div>
    );
  }
}

export default App;
