import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Grid, Image, Container, Icon } from 'semantic-ui-react'

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
  }


  render() {
    const { x, y, shotCounter, dot } = this.state;
    return (
      <Container onClick={this._onClick.bind(this)}>
        <h1>Mouse coordinates: { x } { y }</h1>
        <h1>Counter: {shotCounter} </h1>
        <h1> X: {dot.x} Y: {dot.y} </h1>
          <Grid columns={12} celled height={4}>
        <Icon disabled size='large' name='circle' x={x} y={y}/>
            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>

            </Grid.Row>

            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
            </Grid.Row>
            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>

            </Grid.Row>

            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
            </Grid.Row>
            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>

            </Grid.Row>

            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
            </Grid.Row>
            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>

            </Grid.Row>

            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
            </Grid.Row>
            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>

            </Grid.Row>

            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
            </Grid.Row>
            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>

            </Grid.Row>

            <Grid.Row height={4}>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
              <Grid.Column> <br/><br/> <br/></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

export default Home;

