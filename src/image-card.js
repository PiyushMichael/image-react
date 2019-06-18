import React from 'react';

class ImageCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {spans: 0};
		this.imageRef = React.createRef();
	}
	
	componentDidMount(){
		this.imageRef.current.addEventListener('load',this.setSpans);
	}
	
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/150);
		this.setState({spans});  //new JS featue if variable and state name are same it can be set as such
	}
	
	render(){
		const {description,urls} = this.props.image;
		return(
			<div style={{gridRowEnd: `spans ${this.state.spans}`}}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;