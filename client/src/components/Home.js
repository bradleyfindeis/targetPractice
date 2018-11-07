import React, { Component, Image, Transformation } from 'react';
import { Header } from 'semantic-ui-react';
import { Grid, Container, Icon, Image } from 'semantic-ui-react'

const targetGrid = () => {
  
}

class Home extends Component {

  state = {
    x: 0,
    y: 0,
    shotCounter: 0,
    dot: {
      x: 0,
      y: 0,
    }
  }

  _onClick(e) {
    this.setState({ x: e.screenX, y: e.screenY, shotCounter: (this.state.shotCounter + 1), dot: {x: e.screenX, y: e.screenY},  });
   return 
    <Image src='https://www.freepngimg.com/thumb/bullet%20hole/2-bullet-shot-hole-png-image.png' />
  }

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
      <Container>
        <h1>Mouse coordinates: { x } { y }</h1>
        <h1>Counter: {shotCounter} </h1>
        <h1> X: {dot.x} Y: {dot.y} </h1>
          <Grid columns={12} celled height={4} onClick={this._onClick.bind(this)}>
            {[...Array(12)].map(i => (
                <GridColumn />
            ))}
            </Grid>        
        </Container>
    );
  }
}

export default Home;

