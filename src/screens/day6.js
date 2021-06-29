import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Day3FormContainer from '../components/Day3FormContainer'
import GenerateNumber from '../components/GenerateNumber'
import GenerateHexCodes from '../components/GenerateHexCodes'

const Day6 = () => {
	return (
		<Day3FormContainer>
			<h2 className='py-3'>Day 6 Solution</h2>
			<p>Number Generator</p>
			<Row>
				<Col>
					<GenerateNumber />
				</Col>
			</Row>
			<Row>
				<p>Hex Code Generator</p>
			</Row>
			<Row>
				<Col>
					<GenerateHexCodes />
				</Col>
			</Row>
		</Day3FormContainer>
	)
}

export default Day6
