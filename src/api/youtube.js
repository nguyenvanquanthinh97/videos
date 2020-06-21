import axios from 'axios';

export const KEY = 'AIzaSyAossqWPsrfBDp1uJY04sLyjtorrcypgAM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3'
});
