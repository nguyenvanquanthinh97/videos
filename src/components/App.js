import React from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube, { KEY } from '../api/youtube';

class App extends React.Component {
	state = { videos: [], selectedVideo: null, error: null };

	componentDidMount() {
		this.onSearchSubmit('REACTJS');
	}

	onSearchSubmit = async (term) => {
		try {
			const response = await youtube.get('/search', {
				params: {
					part: 'snippet',
					maxResults: 10,
					type: 'video',
					key: KEY,
					q: term
				}
			});
			this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
		} catch (error) {
			this.setState({ error });
		}
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		const { videos, selectedVideo } = this.state;
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui stackable row">
						<div className="eleven wide column">
							<VideoDetail video={selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
