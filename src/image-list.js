import React from 'react'
import './image-list.css'
import ImageCard from './image-card.js'

class imageList extends React.Component{
	render(){
		const output = this.props.images.map((image)=>{
			return <ImageCard key={image.id} image={image}/>
		});
		return(
			<div className="image-list">{output}</div>
		);
	}
}

export default imageList;