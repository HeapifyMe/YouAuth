
import "../styles/video.scss"
import React, { Component } from 'react'




export class Video extends Component {
    
    render() {
		return (
			<React.Fragment>
				<video></video>
				<button className="button" onClick={this.props.cap}>Capture Image</button>
			</React.Fragment>
		);
	}
}