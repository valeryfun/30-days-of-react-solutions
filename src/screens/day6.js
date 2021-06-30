import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Day3FormContainer from '../components/Day3FormContainer'
import GenerateNumber from '../components/GenerateNumber'
import GenerateHexCodes from '../components/GenerateHexCodes'
import Day6BarChart from '../components/Day6BarChart'

const Day6 = () => {
	return (
		<Day3FormContainer>
			<h2 className='py-3'>Day 6 Solution</h2>
			<h6 className='day6-exercise'>Number Generator</h6>
			<Row>
				<Col>
					<GenerateNumber />
				</Col>
			</Row>
			<h6 className='day6-exercise'>Hex Code Generator</h6>
			<Row>
				<Col>
					<GenerateHexCodes />
				</Col>
			</Row>
			<h6 className='day6-exercise'>Ten most populated Countries</h6>
			<Row>
				<Col>
					<Day6BarChart />
				</Col>
			</Row>
		</Day3FormContainer>
	)
}

export default Day6
