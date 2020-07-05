import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = ({}) => {
	const [ selectedVideo, setSelectedVideo ] = useState(null);
	const [ videos, search ] = useVideos('Reactjs');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos])

	return (
		<div className="ui container">
			<SearchBar onSearchSubmit={search} />
			<div className="ui grid">
				<div className="ui stackable row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
