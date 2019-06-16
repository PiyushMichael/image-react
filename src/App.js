import React from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import ImageList from './image-list';

class App extends React.Component {
	onSubmitCall(x){
		//alert("callback from child to parent: "+x);
		axios.get('https://api.unsplash.com/search/photos',{
			params: {query: x},
			headers: {
				Authorization: 'Client-ID be4392d6a254776232b2d3da0c7da5b2b6c9eab3faa5cad8395e0e3263b16e90'
			}
		});
	}
	
	render(){
		return (
		<div className="ui container" style={{margin: '10px'}}>
			App
			<SearchBar submitCallback={this.onSubmitCall}/>
			<ImageList />
		</div>);
	}
};

export default App;