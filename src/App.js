import React from 'react';
import SearchBar from './search-bar';
import ImageList from './image-list';

const App = () => {
	return (
	<div className="ui container" style={{margin: '10px'}}>
		App
		<SearchBar />
		<ImageList />
	</div>);
};

export default App;