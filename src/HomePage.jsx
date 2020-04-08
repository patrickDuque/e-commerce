import React from 'react';
import './HomePage.scss';

const HomePage = (props) => {
	return (
		<div className='homepage'>
			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<div className='title'>Hats</div>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<div className='title'>Jackets</div>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<div className='title'>Jeans</div>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<div className='title'>WOMENS</div>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<div className='title'>MENS</div>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
