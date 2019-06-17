import React from 'react';
import unsplash from './unsplash';
import SearchBar from './search-bar';
import ImageList from './image-list';

class App extends React.Component {
	state = {images: []};
	
	onSubmitCall = async x => {
		//alert("callback from child to parent: "+x);
		const response = await unsplash.get('/search/photos',{
			params: {query: x}
		});
		this.setState({images: response.data.results});
	}
	
	render(){
		return (
		<div className="ui container" style={{margin: '10px'}}>
			App
			<SearchBar submitCallback={this.onSubmitCall}/>
			<ImageList images={this.state.images}/>
		</div>);
	}
};

export default App;