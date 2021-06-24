import React from 'react'
import { Card } from 'react-bootstrap'

const GenerateNumber = () => {
	const numbers = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
	]

	const oddNumber = numbers.filter(odd => odd % 2 !== 0)
	const evenNumber = numbers.filter(odd => odd % 2 === 0)

	return (
		<div className='day6-container'>
			{oddNumber.map(oddNumbers => (
				<Card className='day6-card' style={{ backgroundColor: 'orange' }}>
					{oddNumbers}
				</Card>
			))}
			{evenNumber.map(evenNumbers => (
				<Card className='day6-card' style={{ backgroundColor: 'red' }}>
					{evenNumbers}
				</Card>
			))}
			{/* {numbers
				.filter(even => even % 2 === 0)
				.map(evenNumber => (
					<Card className='day6-card' style={{ backgroundColor: 'red' }}>
						{evenNumber}
					</Card>
				))
				? numbers
						.filter(odd => odd % 2 !== 0)
						.map(oddNumber => (
							<Card className='day6-card' style={{ backgroundColor: 'orange' }}>
								{oddNumber}
							</Card>
						))
				: null} */}
		</div>
	)
}

export default GenerateNumber
