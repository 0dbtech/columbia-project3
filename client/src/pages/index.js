import React from 'react';
import HeaderComponent from "../components/Header/header"
import DogComponent from "../components/Dog/dog"
import FooterComponent from "../components/Footer/footer"
import SearchComponent from "../components/Search/search"
import { CardDeck } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }
  dogs = [{
    name : 'Tala',
    age : 2,
    breed : 'Golden retriver',
    image : 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555378804/shape/mentalfloss/istock_000009655750_small.jpg'
  },
  {
    name : 'Boo',
    age : 5,
    breed : 'pitpull',
    image : 'https://t2.ea.ltmcdn.com/en/images/9/0/0/img_names_for_pit_bull_dogs_9_600.jpg'
  },
  {
    name : 'Zouzou',
    age : 8,
    breed : 'beagle',
    image : 'http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/beagle_04_lg.jpg'
  },
  {
    name : 'Muchi',
    age : 4,
    breed : 'Corgi',
    image : 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg'
  },
  {
    name : 'sky',
    age : 3,
    breed : 'Husky',
    image : 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg'
  },
  {
    name : 'Prince',
    age : 4,
    breed : 'Labradoodle',
    image : 'https://thenypost.files.wordpress.com/2018/09/85327728.jpg?quality=90&strip=all&w=618&h=410&crop=1'
  }
]

  render() {
    return (
      <div>
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent></SearchComponent>
        </div>
        <div className="myDogs">
          {this.createDogCardDecks()}
        </div>
        <div className="myFooter">
        <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }

  createDogCardDecks = () => {
    let table = []
    let k = 0
    for (let i = 0; i < this.dogs.length; i++) {
      let children = []
      for (let j = 0; j < 3; j++) {
        if(this.dogs[k])
          children.push(<DogComponent name={this.dogs[k].name} age={this.dogs[k].age} breed={this.dogs[k].breed} image={this.dogs[k].image}></DogComponent>)
        else
          children.push(<Card style={{ width: '18rem' }}></Card>)
        k++
        i=k-1;
      }
      table.push(<CardDeck>{children}</CardDeck>)
    }
    return table
  }
}

export default FrontPage;