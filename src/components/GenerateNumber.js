import React from 'react'
import { Card } from 'react-bootstrap'

const GenerateNumber = () => {
	const numbers = Array(100)
		.fill()
		.map((_, index) => index + 1)
	numbers.sort(() => Math.random() - 0.5).slice(0, 8)

	return (
		<div className='day6-container'>
			{numbers.map(randomNumber => (
				<Card className='day6-card'>{randomNumber}</Card>
			))}
		</div>
	)
}

export default GenerateNumber
