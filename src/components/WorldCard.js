/* eslint-disable array-callback-return */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const WorldCard = () => {
	const [country, setCountry] = useState([])
	const [name, setCount] = useState('')

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then(res => res.json())
			.then(result => {
				setCountry(countryName(result))
				console.log(countryName(result))
			})
	}, [])

	const countryName = country => {
		return country.map(d => ({
			name: d.name,
			population: d.population,
			language: d.languages,
			capital: d.capital,
			flag: d.flag
		}))
	}

	return ['Light'].map((variant, idx) => (
		<Card
			key={idx}
			bg={variant.toLowerCase()}
			text={variant.toLowerCase() === 'light' ? 'dark' : 'black'}
			style={{ width: '25rem', justifyContent: 'center' }}
		>
			<Card.Img variant='top' src={name.flag} alt={name.name} />
			<Card.Body>
				<Card.Title>{name.name}</Card.Title>
				<Card.Text>
					<strong>Capital: </strong>
					{name.capital}
				</Card.Text>
				<Card.Text>
					<strong>Population: </strong> {name.population}
				</Card.Text>
				<Card.Text>
					<strong>Language: </strong>
				</Card.Text>

				<Button
					block
					size='md'
					onClick={() =>
						setCount(country[Math.floor(Math.random() * country.length)])
					}
				>
					Click me
				</Button>
			</Card.Body>
		</Card>
	))
}

export default WorldCard
