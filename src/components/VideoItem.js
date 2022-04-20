import "./VideoItem.css"
import React from "react"

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                src={video.snippet.thumbnails.default.url}
                className="ui image">
            </img>
            <div className="content">
                <p className="header">{video.snippet.title}</p>
            </div>
        </div>
    )
}


export default VideoItem