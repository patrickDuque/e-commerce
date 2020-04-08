import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ id, imageUrl, name, price }) => {
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span>{name}</span>
				<span>₱ {price * 50}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
