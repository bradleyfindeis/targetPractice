import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Grid, Image, Container } from 'semantic-ui-react'

const targetGrid = () => {
  
}

class Home extends Component {

  state = {
    x: 0,
    y: 0,
  }

  // _onMouseMove(e) {
  //   this.setState({ x: e.screenX, y: e.screenY });
  // } 

  _onClick(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }


  render() {
    const { x, y } = this.state;
    return (

    // <div onClick={this._onClick.bind(this)}>

    
    
    
    // </div>
    <Container onClick={this._onClick.bind(this)}>
    <h1>Mouse coordinates: { x } { y }</h1>
        <Grid columns={12} celled height={4}>
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

