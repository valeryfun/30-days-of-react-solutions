/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import Dnd from '../components/Dnd'
import Day3FormContainer from '../components/Day3FormContainer'

const Day11 = () => {
	return (
		<div>
			<Day3FormContainer>
				<h2 className='py-3'>Day 11 Solution</h2>
				<h6 className='day6-exercise'>Drag and Drop</h6>
				<Row>
					<Dnd />
				</Row>
			</Day3FormContainer>
		</div>
	)
}

export default Day11
