import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badges from './Badges'

const Day3Card = () => {
	return (
		<Container>
			<Row className='justify-content-md-center'>
				<Col xs={12} md={12}>
					{['Light'].map((variant, idx) => (
						<Card
							className='day3-display-card'
							bg={variant.toLowerCase()}
							key={idx}
							text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
						>
							<Card.Body>
								{' '}
								<Row>
									<Col xs={12} md={12}>
										<Image
											className='py-3 display-image'
											fluid
											src='/displayimage.jpg'
											roundedCircle
										/>
									</Col>
								</Row>
								<Row>
									{' '}
									<Col xs={12} md={12}>
										<Card.Text>
											<h5>
												VALERY FUN{' '}
												<FontAwesomeIcon
													icon='check-circle'
													style={{ color: '#40E0D0' }}
												/>
											</h5>
										</Card.Text>
										<Card.Text>
											<p>Frontend Developer</p>
										</Card.Text>
										<Card.Text>
											<h5>SKILLS</h5>
										</Card.Text>
										<Badges skill='ReactJS' />
										<Badges skill='Redux' />
										<Badges skill='Javascript' />
										<Badges skill='HTML5' />
										<Badges skill='CSS' />
										<Badges skill='Wireframing' />
										<Badges skill='Adobe XD' />
										<Badges skill='Git' />
									</Col>
								</Row>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	)
}

export default Day3Card
