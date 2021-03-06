import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class Bullet extends React.Component {



  render() {
    return (
        <div>
            <Draggable
                axis="both"   
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[1, 1]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                allowAnyClick>
                    <img draggable='false' src='https://www.freepngimg.com/thumb/bullet%20hole/2-bullet-shot-hole-png-image.png' className="handle" height="150" width="150" />
            </Draggable>
        </div>
    );
  }
}


export default Bullet;