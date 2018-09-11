import React, {Component} from 'react';
import './Piano.css'

class Piano extends Component {
    playHandler = this.playHandler.bind(this);
    pressHandler = this.pressHandler.bind(this);

    componentDidMount() {
        document.addEventListener('keydown', this.pressHandler);
      }

    playHandler(f){
        const sound = document.getElementById(this.props.keyPress)
        sound.currentTime = 0
        sound.play()
        this.props.update(this.props.clipId)
      }
      
    pressHandler(f){
        if (f.keyCode === this.props.keyCode){

            this.playHandler();
        }
    }
    render(){
        return (
            <li className={this.props.class} onClick={this.playHandler}>
                <audio className="sound" src={this.props.url} id={this.props.keyPress}></audio>
                {this.props.keyPress}
            </li>
        )
    }
}

export default Piano