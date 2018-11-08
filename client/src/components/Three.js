import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text, Image } from 'react-konva';
import { Grid, Container, Icon } from 'semantic-ui-react';




class Three extends Component {

    state = {
        image: null,
        x: 0,
        y: 0,
        shotCounter: 0,
        dot: {
          x: 0,
          y: 0,
        }
      };

      _onClick(e) {
        this.setState({ x: e.screenX, y: e.screenY, shotCounter: (this.state.shotCounter + 1), dot: {x: e.screenX, y: e.screenY},  });
      }

      componentDidMount() {
        const image = new window.Image();
        image.src = 'https://www.freepngimg.com/thumb/bullet%20hole/2-bullet-shot-hole-png-image.png';
        image.onload = () => {
          // setState will redraw layer
          // because "image" property is changed
          this.setState({
            image: image
          });
        };
      }

  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  GridColumn = () => {
    return(
        <Grid.Row height={4}>
        {[...Array(12)].map(i => (
          <Grid.Column> <br/><br/> <br/></Grid.Column>
        ))}
        </Grid.Row>
    )    
  }
  render() {
   
    const { x, y, shotCounter, dot } = this.state;
    const GridColumn = this.GridColumn
    return (
        <div>
        <Grid columns={12} celled height={4}>
                {[...Array(12)].map(i => (
                    <GridColumn key={i} />
                ))}
            </Grid>
        <Stage opacity={0}  width={window.innerWidth} height={window.innerHeight}>
      </Stage>
      </div>
    );
  }
}


export default Three;