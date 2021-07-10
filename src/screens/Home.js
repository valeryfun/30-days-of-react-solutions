import React from 'react'
import { Row } from 'react-bootstrap'
import Day3FormContainer from '../components/Day3FormContainer'
import TimeDate from '../components/TimeDate'
import Day3Card from '../components/Day3Card'

const Home = () => {
	return (
		<Day3FormContainer>
			<h1>
				<TimeDate />
			</h1>
			<Row>
				<Day3Card />
			</Row>
		</Day3FormContainer>
	)
}

export default Home
