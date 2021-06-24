import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import day3 from './screens/day3'
import Day4 from './screens/day4'
import Day6 from './screens/day6'

library.add(faCheckCircle)

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/day-3-solutions' component={day3} />
					<Route path='/day-4-solutions' component={Day4} />
					<Route path='/day-6-solutions' component={Day6} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
