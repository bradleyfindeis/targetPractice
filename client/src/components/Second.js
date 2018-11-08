import React, { Component} from 'react';
import { Header, Grid, Container, Button } from 'semantic-ui-react';
import Bullet from './Four';



class Second extends Component {

  state = {
    clicked: false,
  }

  // Some old code to record where on the canvas/screen I was clicking
//   _onClick(e) {
//     this.setState({ x: e.screenX, y: e.screenY, shotCounter: (this.state.shotCounter + 1), dot: {x: e.screenX, y: e.screenY}, });
//   }

  handleClick = () => {
      this.setState({
          clicked: true
      });
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
    const PlaceImage = this.PlaceImage
    return (
        <div>
        <Bullet/>
      <Container>
      <Button onClick={this.handleClick} > Add New </Button>
          <Grid columns={12} celled height={4} >
            {[...Array(12)].map(i => (
                <GridColumn key={i}/>
            ))}
            </Grid>        
            {this.state.clicked ? <Bullet /> : null}
        </Container>
        </div>
    );
  }
}

export default Second;

