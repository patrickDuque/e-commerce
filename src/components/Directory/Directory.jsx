import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import directoryData from './directoryData';
import './Directory.scss';

class Directory extends Component {
	state = {
		section : directoryData
	};

	render() {
		return (
			<div className='directory-menu'>
				{this.state.section.map(({ id, title, imageUrl, size, linkUrl }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
				))}
			</div>
		);
	}
}

export default Directory;
