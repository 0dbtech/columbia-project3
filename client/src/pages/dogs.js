import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import DogComponent from "../components/Dog/dog";
import { CardDeck, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import fakeDogs from '../FakeDataBase';
import Map from "../components/GoogleMap/map";
import axios from 'axios';
import RealDataBase from '../RealDataBase';
import dogResults from '../RealDataBase';
class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: [],
      zip:'',
      dogs:[]
    };
  }

  componentDidMount() {
   
    // axios.get('http://localhost:8000/api/all').then(res => {
    //   console.log(res);
    //   this.setState({dogs:res.data.dogData});
    //   console.log(this.state.dogs)
    // });
    this.setState({
      zip:this.props.zip,
      dogs:RealDataBase.getDogsByZip(RealDataBase.currentZip)
  });
  console.log(this.state.zip)
  console.log(RealDataBase.getDogsByZip(RealDataBase.currentZip))
  console.log(dogResults);
  this.setState({ results: this.createDogCardDecks()});

}

  componentWillMount() {
  }

  populateDeck() {
    console.log("buttonclicked")
console.log(dogResults.dogResults)
    let table = []
    let k = 0
    for (let i = 0; i < dogResults.dogResults.length; i++) {
      let children = []
      for (let j = 0; j < 3; j++) {
        if(dogResults.dogResults[k])
          children.push(<DogComponent 
            key={k} 
            dogsId={k} 
            name={dogResults.dogResults[k].NAME} 
            age={dogResults.dogResults[k].AGE} 
            breed={dogResults.dogResults[k].BREED} image={dogResults.dogResults[k].IMAGE}></DogComponent>)
        else
          children.push(<Card></Card>)
        k++
        i=k-1;
      }
      table.push(<CardDeck>{children}</CardDeck>)
    }
    return table
  
  }

  render() {
    return (
      <div className="dog-page">
        <div className="myHeader">
         <HeaderComponent />
        </div>
        <div className="myDogs">
          {this.state.results}
        </div>
        <div>
          <Map></Map>
        </div>
        <div className="myFooter">
          <FooterComponent />
        </div>
        <button onClick={this.populateDeck}>Create Deck of cards</button>
      </div>
    );
  }

  createDogCardDecks = () => {
    let table = []
    let k = 0
    for (let i = 0; i < dogResults.dogResults.length; i++) {
      let children = []
      for (let j = 0; j < 3; j++) {
        if(dogResults.dogResults[k])
          children.push(<DogComponent 
            key={k} 
            dogsId={k} 
            name={dogResults.dogResults[k].NAME} 
            age={dogResults.dogResults[k].AGE} 
            breed={dogResults.dogResults[k].BREED} image={dogResults.dogResults[k].IMAGE}></DogComponent>)
        else
          children.push(<Card></Card>)
        k++
        i=k-1;
      }
      table.push(<CardDeck>{children}</CardDeck>)
    }
    return table
  }
  
}

export default withRouter(Dogs);