import React from 'react'



class imageList extends React.Component{
	render(){
		const output = this.props.images.map((image)=>{
			return <img alt={image.description} key={image.id} src={image.urls.regular} />
		});
		return(
			<div>
				Image list...
				<p>{output}</p>
			</div>
		);
	}
}

export default imageList;