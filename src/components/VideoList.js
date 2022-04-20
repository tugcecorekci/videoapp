import React from "react"

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    })
    return (
        <div className="ui relaxed divided list">{renderedVideos}</div>
    )
}

export default VideoList

//props deconstruct edilmeden önce böyleydi
// const VideoList = props => {
//    const renderedVideos = props.videos.map(video => {
