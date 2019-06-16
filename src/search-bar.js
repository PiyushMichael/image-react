import React from 'react';

class SearchBar extends React.Component {
	state = {term: ''};
	
	formSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.term);
		this.props.submitCallback(this.state.term);
	}
	
	render(){
		return (
			<div className="ui segment">
				<form onSubmit={this.formSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input value={this.state.term} type="text" onChange={e => this.setState({term: e.target.value.toUpperCase()})}/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;