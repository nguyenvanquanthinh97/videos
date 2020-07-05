import { useState, useEffect } from 'react';

import youtube, { KEY } from '../api/youtube';

const useVideos = (defaultTerm) => {
	const [ videos, setVideos ] = useState([]);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		search(defaultTerm);
	}, [defaultTerm]);

	const search = async (term) => {
		try {
			setError(null);
			const response = await youtube.get('/search', {
				params: {
					part: 'snippet',
					maxResults: 10,
					type: 'video',
					key: KEY,
					q: term
				}
			});
			setVideos(response.data.items);
		} catch (error) {
			setError(error);
		}
	};

	return [ videos, search ];
};

export default useVideos;
