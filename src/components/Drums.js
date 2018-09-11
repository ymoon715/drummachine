import React, {Component} from 'react';
import Drum from './Drum'
import './Drums.css'

const drumSets = [{
  keyCode: 49,
  keyPress: '1',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 50,
  keyPress: '2',
  id: 'Closed High-Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 51,
  keyPress: '3',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}, {
  keyCode: 52,
  keyPress: '4',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 53,
  keyPress: '5',
  id: 'Open High-Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}
];


// play handler
// keypress handler
class Drums extends Component {


  render(){
    return (
      <div className="drums">
    {drumSets.map(a=>(
      <Drum update={this.props.update} key={a.id} clipId={a.id} keyCode={a.keyCode} url={a.url} keyPress={a.keyPress} />
    ))}
    </div>
    )
  }
}


export default Drums;