import React, { Component } from 'react';
import ShopData from './shopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

class ShopPage extends Component {
	state = {
		collections : ShopData
	};
	render() {
		return (
			<div className='shop-page'>
				{this.state.collections.map((collection) => (
					<PreviewCollection title={collection.title} key={collection.id} items={collection.items} />
				))}
			</div>
		);
	}
}

export default ShopPage;
