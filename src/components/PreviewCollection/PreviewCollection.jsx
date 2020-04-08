import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './PreviewCollection.scss';

const PreviewCollection = ({ title, items }) => (
	<div className='collection-preview'>
		<h1>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((item, index) => index < 4)
				.map((item) => (
					<CollectionItem
						key={item.id}
						className='title'
						name={item.name}
						imageUrl={item.imageUrl}
						price={item.price}
					/>
				))}
		</div>
	</div>
);

export default PreviewCollection;
