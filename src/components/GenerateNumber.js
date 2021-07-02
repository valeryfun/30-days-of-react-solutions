import React from 'react'
import { Card } from 'react-bootstrap'

const GenerateNumber = () => {
	const numbers = Array(36)
		.fill()
		.map((_, index) => index + 1)
	numbers.sort(() => Math.random() - 0.5).slice(0, 10)

	return ['Light'].map((variant, idx) => (
		<div className='day6-container'>
			{numbers.map(randomNumber => (
				<Card
					className='day6-card'
					key={idx}
					bg={variant.toLowerCase()}
					text={variant.toLowerCase() === 'light' ? 'dark' : 'black'}
				>
					{randomNumber}
				</Card>
			))}
		</div>
	))
}

export default GenerateNumber
