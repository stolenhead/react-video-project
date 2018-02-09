import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls.js';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentsDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return(
      <VideoPlayerLayout setRef={this.setRef}>
        <Title
          title={this.props.title}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
        </Controls>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer