import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedVideos = videos.map((video) => (
		<VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
	));
	return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

VideoList.defaultProps = {
	videos: []
};

export default VideoList;
