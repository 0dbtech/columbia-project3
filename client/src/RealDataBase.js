//require('../src/assets/img/04.jpg')
import axios from 'axios';

let shelterZipCodes = [];
let dogs = [];
let currentZip = "";
let dogResults = [];

  function getDogShelterZipCodes(_callback) {
    const shelterZipCodeArray=[];
    axios.get('http://localhost:8000/api/all').then(res => {
      for (var i = 0; i < res.data.length; i ++) {
        shelterZipCodeArray.push( res.data[i].ZIPCODE);
        console.log(shelterZipCodeArray);
      }
      console.log(shelterZipCodeArray);
      return shelterZipCodeArray;
    }).then( _callback
    );
}
function getDogsByZip(zipcode) {
    axios.get('/details/shelterszip/' + zipcode).then(res => {
      console.log(res.data);
    dogs = res.data;
    }).then(()=>{
   // dogResults = [];
   for (var i = 0; i < dogs.length; i++) {
     console.log(dogs[i]);
     dogResults.push(dogs[i]);
   }
    dogResults.push(dogs);
    return dogs;
  })
}
  

 export default {getDogsByZip,getDogShelterZipCodes,shelterZipCodes, currentZip,dogResults};