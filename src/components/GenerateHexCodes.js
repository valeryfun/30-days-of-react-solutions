import React from 'react'
import { Card } from 'react-bootstrap'

const GenerateHexCodes = () => {
	var colors = []
	while (colors.length < 36) {
		do {
			var color = Math.floor(Math.random() * 100000 + 1)
		} while (colors.indexOf(color) >= 0)
		colors.push('#' + ('000000' + color.toString(16)).slice(-6))
	}
	return (
		<div className='day6-container'>
			{colors.map(randomHex => (
				<Card
					className='day6-card'
					style={{ backgroundColor: randomHex, color: '#ffffff' }}
				>
					{randomHex}
				</Card>
			))}
		</div>
	)
}

export default GenerateHexCodes
