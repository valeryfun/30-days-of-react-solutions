import React from 'react'

const Switch = ({ isOn, onChange }) => {
	return (
		<>
			<input
				checked={isOn}
				onChange={onChange}
				className='react-switch-checkbox'
				id={`react-switch-new`}
				type='checkbox'
			/>
			<label
				className='react-switch-label'
				htmlFor={`react-switch-new`}
				style={{ background: isOn && '#06D6A0' }}
			>
				<span className={`react-switch-button`} />
			</label>
		</>
	)
}

export default Switch
