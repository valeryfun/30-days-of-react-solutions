import React from 'react'
import Day3FormContainer from '../components/Day3FormContainer'
import Day3Card from '../components/Day3Card'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap-floating-label'

const day3 = () => {
	return (
		<Day3FormContainer>
			<h2 className='py-3'>Day 3 Solution</h2>
			<Card className='day3-form'>
				<Card.Header as='h5' className='day3Header'>
					Subscribe
				</Card.Header>
				<Card.Body className='day3Body'>
					<Card.Subtitle className='py-3'>
						<h6>Sign up with your email to receive news and updates!</h6>
					</Card.Subtitle>
					<Form>
						<Row className='g-2'>
							<Col md>
								<Form.Group controlId='firstName'>
									<FloatingLabel controlId='floatingInput' label='First Name'>
										<Form.Control
											type='firstName'
											placeholder='First Name'
										></Form.Control>
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col md>
								<Form.Group controlId='lastName'>
									<FloatingLabel controlId='floatingInput' label='Last Name'>
										<Form.Control
											type='lastName'
											placeholder='Last Name'
										></Form.Control>
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col md>
								<Form.Group controlId='email'>
									<FloatingLabel controlId='floatingInput' label='Email'>
										<Form.Control
											type='email'
											placeholder='Email'
										></Form.Control>
									</FloatingLabel>
								</Form.Group>
							</Col>
						</Row>
						<Row className='mb-2'>
							<Col md={3}></Col>
							<Col md={6}>
								<Button type='submit' variant='danger' size='md' block>
									Subscribe
								</Button>
							</Col>
							<Col md={3}></Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
			<Day3Card />
		</Day3FormContainer>
	)
}

export default day3
