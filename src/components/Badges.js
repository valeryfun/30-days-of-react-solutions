import React from 'react'
import { Badge } from 'react-bootstrap'

const Badges = props => {
	return (
		<Badge variant='info' style={{ padding: '5px', margin: '5px' }}>
			{props.skill}
		</Badge>
	)
}

export default Badges
