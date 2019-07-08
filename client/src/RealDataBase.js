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
      shelterZipCodes = shelterZipCodeArray;
      return shelterZipCodes;
    }).then(    _callback
    );
}
function getDogsByZip(zipcode) {
    axios.get('/details/shelterszip/' + zipcode).then(res => {
      console.log(res.data);
    dogs = res.data;
   // dogResults = [];
   for (var i = 0; i < res.data.length; i++) {
     console.log(res.data[i]);
     dogResults.push(res.data[i]);
   }
   var dog = {
     name: res.data.NAME,
   }
   var results = [];
    dogResults.push(res.data);
    return dogs;
});
}

 export default {getDogsByZip,getDogShelterZipCodes,shelterZipCodes, currentZip,dogResults};