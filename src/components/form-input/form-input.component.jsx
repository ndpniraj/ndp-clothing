import React from 'react';
import './form-input.component.scss';

const FormInput = ({ handleChange, lable, ...otherInputProps }) => {
	return (
		<div className='group'>
			<input
				onChange={handleChange}
				className='form-input'
				{...otherInputProps}
			/>
			{lable ? (
				<label
					className={`${otherInputProps.vlaue ? 'shrink' : ''}form-input-label`}
				>
					{lable}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
