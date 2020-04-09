import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='group'>
		<input {...otherProps} onChange={handleChange} className='form-input' />
		{label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
	</div>
);

export default FormInput;