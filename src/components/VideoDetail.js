import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) return null;

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe src={videoSrc} title={video.snippet.title} allowFullScreen />
			</div>
			<div className="ui segment">
				<div className="ui header">{video.snippet.title}</div>
				<div className="ui description">{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
