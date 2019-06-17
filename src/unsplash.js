//unsplash api functions
import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID be4392d6a254776232b2d3da0c7da5b2b6c9eab3faa5cad8395e0e3263b16e90'
	}
	
});