import React, {Component} from 'react'
import './Drum.css'


class Drum extends Component {
    playHandler = this.playHandler.bind(this);
    pressHandler = this.pressHandler.bind(this);
    componentDidMount() {
        document.addEventListener('keydown', this.pressHandler);
      }
      
      playHandler(e){
        const sound = document.getElementById(this.props.keyPress)
        sound.currentTime = 0
        sound.play()
        this.props.update(this.props.clipId)
      }
      
      pressHandler(e){
        if (e.keyCode === this.props.keyCode){
            this.playHandler();

        }
    }
    render(){
        return (
    <div className="Pad" onClick={this.playHandler}>
        <audio className="sound" src={this.props.url} id={this.props.keyPress}></audio>
        {this.props.keyPress}
    
    </div>
        )
    }
}  
export default Drum;