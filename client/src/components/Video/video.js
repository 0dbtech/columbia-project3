import React from "react";
import ReactPlayer from 'react-player';

class VideoComponent extends React.Component {
    render () {
      return (
      <div>
        <ReactPlayer
          url='https://firebasestorage.googleapis.com/v0/b/paw-media.appspot.com/o/image%2Fdixie-tail-chase.mp4?alt=media&token=158a10c1-c26b-42df-a2d1-090a12e4d6c9'
          className='react-player'
          width='1000px'
          height='1000px'
          playing= {true}
          controls= {true}
          loop= {true}
        />
      </div>
      );
    }
}
export default VideoComponent;