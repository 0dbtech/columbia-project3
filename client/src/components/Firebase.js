
import React, { Component } from "react";

var firebase = require('firebase');
// require('firebase/storage');
var firebaseConfig = {

  apiKey: "AIzaSyDWg5xUa_bl4UdBFPZKI0zkdqeVDVWoU_8",
  authDomain: "paw-media.firebaseapp.com",
  databaseURL: "https://paw-media.firebaseio.com",
  projectId: "paw-media",
  storageBucket: "paw-media.appspot.com",
  messagingSenderId: "44643133731",
  appId: "1:44643133731:web:1f1aeaf218dfb6b8"

};

//initialize app

firebase.initializeApp(firebaseConfig);

 //global vars  
 var image = null;
 var video = null; 

 
var storage = firebase.storage();





class FirebaseForm extends React.Component {
  // Setting the initial values of this.state.username and this.state.password
  // state = {
  //   username: "",
  //   password: ""
  // };



  // // handle any changes to the input fields
  // handleInputChange = event => {
  //   // Pull the name and value properties off of the event.target (the element which triggered the event)
  //   const { name, value } = event.target;

  //   // Set the state for the appropriate input field
  //   this.setState({
  //     [name]: value

    
  //   });



  // };

  // When the form is submitted, prevent the default event and alert the username and password
  handleImageFormSubmit = (event) => {
    event.preventDefault();

    image = document.querySelector('input.image[type=file]').files[0];
    console.log("uploading " + image.name);



    // var name = image.name;

    var storageRef = storage.ref(`/image/${image.name}`);

    storageRef.put(image).then(function(snapshot){
       // console.log(snapshot);
       storageRef.getDownloadURL().then(function (imageURL){
           console.log(imageURL);
           console.log("send image to database")
       })
    })
   

   // var name = image.name;

  //   const storageRef = storage.ref(`/image/${name}`);

  //   storageRef.put(photo).then(function(snapshot){
  //      // console.log(snapshot);
  //      storageRef.getDownloadURL().then(function (photoURL){
  //          //save downloadurl to state
  //          console.log(photoURL)
  //     //.then //video upload
  //   //})
  // )};

  };


  handleVideoFormSubmit = (event) => {
    event.preventDefault();

   


    video = document.querySelector('input.video[type=file]').files[0];
    console.log("uploading " + video.name);
  
    // var name = video.name;

    var storageRef = storage.ref(`/video/${video.name}`);

    storageRef.put(video).then(function(snapshot){
       // console.log(snapshot);
       storageRef.getDownloadURL().then(function (videoURL){
           console.log(videoURL);
           console.log("send video to database")
       })
    })

   // var name = image.name;

  //   const storageRef = storage.ref(`/image/${name}`);

  //   storageRef.put(photo).then(function(snapshot){
  //      // console.log(snapshot);
  //      storageRef.getDownloadURL().then(function (photoURL){
  //          //save downloadurl to state
  //          console.log(photoURL)
  //     //.then //video upload
  //   //})
  // )};

  };



  render() {
    return (
      <>
      <h2>Video Upload</h2>
     <input type="file" accept="video/mp4" class="video"/>
     <input type="submit" onClick={this.handleVideoFormSubmit} class="vidSubmit" value="upload video"/>


     <h2>Image Upload</h2>
     <input type="file" accept="image/jpg" class="image"/>
     <input type="submit" onClick={this.handleImageFormSubmit} class="imgSubmit" value="upload image"/>

     </>
    );
  }
}

export default FirebaseForm;