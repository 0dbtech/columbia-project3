import React, { Component } from "react";

var firebase = require('firebase/app');
require('firebase/storage');

 
var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDWg5xUa_bl4UdBFPZKI0zkdqeVDVWoU_8",
    authDomain: "paw-media.firebaseapp.com",
    databaseURL: "https://paw-media.firebaseio.com",
    projectId: "paw-media",
    storageBucket: "paw-media.appspot.com",
    messagingSenderId: "44643133731",
    appId: "1:44643133731:web:1f1aeaf218dfb6b8"

});

const storage = firebase.storage();





class FirebaseForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };



  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = (event) => {
    event.preventDefault();
    const photo = document.querySelector('input[type=file]').files[0];
    console.log(photo);
    const name = photo.name;

    const storageRef = storage.ref(`/image/${name}`);

    storageRef.put(photo).then(function(snapshot){
       // console.log(snapshot);
       storageRef.getDownloadURL().then(function (photoURL){
           //save downloadurl to state
           console.log(photoURL);
       }).then //video upload
    })
  };

  render() {
    return (
        <>
     <input type="file" accept="video/mp4" class="video"/>
     <input type="submit" onClick={this.handleFormSubmit} value="upload"/>
     </>
    );
  }
}

export default FirebaseForm;
