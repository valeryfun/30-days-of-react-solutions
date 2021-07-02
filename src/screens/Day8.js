import React from 'react'
import WorldCard from '../components/WorldCard'
import Day3FormContainer from '../components/Day3FormContainer'
import { Row, Col } from 'react-bootstrap'

const Day8 = () => {
	return (
		<Day3FormContainer>
			<h2 className='py-3'>Day 8 Solution</h2>
			<h6 className='day6-exercise'>Where to travel next?</h6>
			<Row>
				<Col></Col>
				<Col>
					<WorldCard />
				</Col>
				<Col></Col>
			</Row>
		</Day3FormContainer>
	)
}

export default Day8
