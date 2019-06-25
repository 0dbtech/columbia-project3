import React from 'react';

class FirebaseConsole extends React.Component {
    constructor(props) {
        this.setState = {
            Image: "",
            Video: ""
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    render() {
        var firebaseConfig = {
            apiKey: "AIzaSyDWg5xUa_bl4UdBFPZKI0zkdqeVDVWoU_8",
            authDomain: "paw-media.firebaseapp.com",
            databaseURL: "https://paw-media.firebaseio.com",
            projectId: "paw-media",
            storageBucket: "paw-media.appspot.com",
            messagingSenderId: "44643133731",
            appId: "1:44643133731:web:1f1aeaf218dfb6b8"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const storage = firebase.storage();

        handleButtonClick = (event) => {
            event.preventDefault();
            const name = photo.name;
            const storageRef = storage.ref(`/image/${name}`);
            storageRef.put(photo).then(function (snapshot) {
                // console.log(snapshot);
                storageRef.getDownloadURL().then(function (photoURL) {
                    console.log(photoURL);
                    this.setState({

                    })
                })
            })
        }

        handleImageClick = (event) => {
            this.setState = {
                Image: event.target.value
            }
        }
        handleVideoClick =(event)=>{
            video = event.target.files[0];
            console.log(video);
        }

        let photo = null;
        $("input[type=file]").on("change", function (event) {
            photo = event.target.files[0];
            console.log(photo);

        });

        let video = null;
        $("input[type=file]").on("change", function (event) {
            video = event.target.files[0];
            console.log(video);

        });


        return (
            <div>
                <title>Firebase Storage Test</title>
                <h1>Testing Firebase Video Uploads</h1>

                <input type="file" onChange={handleFileChange} accept="image/png" />

                <input onClick={handleButtonClick} type="submit" value="Upload an Image of your pup" />
                <input onClick={handleVideoClick} type="submit" value="Upload an Video of your pup" />

                <img src="https://firebasestorage.googleapis.com/v0/b/paw-media.appspot.com/o/image%2Fbamazon.png?alt=media&token=0e35de00-c697-4263-b235-a30d31a23eeb" ></img>
            </div>

        );
    }
}

export default FirebaseConsole;