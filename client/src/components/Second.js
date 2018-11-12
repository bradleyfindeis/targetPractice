import React, { Component } from 'react';
import { Grid, Image, Container, Icon, Button } from 'semantic-ui-react'
import Bullet from './Bullet';

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
    this.handleClick()
  }

  handleClick() {
      console.log('I am here')
  }

  GridColumn = () => {
    return(
        <Grid.Row height={4}>
        {[...Array(12)].map(i => (
          <Grid.Column key={i}> <br/><br/> <br/></Grid.Column>
        ))}
        </Grid.Row>
    )    
  }


  render() {
    const { x, y, shotCounter, dot } = this.state;
    const GridColumn = this.GridColumn
    return (
        <div>
        <h1>Mouse coordinates: { x } { y }</h1>
        <h1>Counter: {shotCounter} </h1>
        <h1> X: {dot.x} Y: {dot.y} </h1>
      <Button onClick={this.handleClick} > Add New </Button>
      <Container onClick={this._onClick.bind(this)}>
          <Grid columns={12} celled height={4} >
            {[...Array(12)].map(i => (
                <GridColumn key={i}/>
            ))}
            </Grid>        
            {this.state.clicked ? <Bullet /> : null}
            <Bullet/>
        </Container>
        </div>
    );
  }
}

export default Home;










// class Second extends Component {

//   state = {
//     clicked: false,
//     x: 0,
//     y:0,
    // data: [{
    //     bullet1: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet2: [{
    //         x: 0,
    //         y: 0,
    //         number: 2,
    //     }],
    //     bullet3: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet4: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet5: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet6: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet7: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bulle8: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet9: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    //     bullet10: [{
    //         x: 0,
    //         y: 0,
    //         number: 1,
    //     }],
    // }]

