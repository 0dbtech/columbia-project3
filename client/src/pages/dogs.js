import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import DogComponent from "../components/Dog/dog";
import { CardDeck, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import fakeDogs from '../FakeDataBase';
import Map from "../components/GoogleMap/map";
import axios from 'axios';
class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: [],
      dogs:[]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/all').then(res => {
      console.log(res);
      this.setState({dogs:res.data.dogData});
      console.log(this.state.dogs)
    });
  }

  componentWillMount() {
    this.setState({ results: this.createDogCardDecks()});
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
      </div>
    );
  }

  createDogCardDecks = () => {
    let table = []
    let k = 0
    for (let i = 0; i < fakeDogs.length; i++) {
      let children = []
      for (let j = 0; j < 3; j++) {
        if(fakeDogs[k])
          children.push(<DogComponent 
            key={k} 
            dogsId={k} 
            name={fakeDogs[k].name} 
            age={fakeDogs[k].age} 
            breed={fakeDogs[k].breed} image={fakeDogs[k].image}></DogComponent>)
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