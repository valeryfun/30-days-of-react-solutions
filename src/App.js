import React, { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Footer from './components/Footer'
import day3 from './screens/day3'
import Day4 from './screens/day4'
import Day6 from './screens/day6'
import Day8 from './screens/Day8'
import Day11 from './screens/Day11'
import Switch from './components/Switch'

library.add(faCheckCircle, faSun, faMoon)

const App = () => {
	const [value, setValue] = useState(false)
	const [darkTheme, setDarkTheme] = useState(false)

	return (
		<div className={darkTheme ? 'dark-theme' : 'light-theme'}>
			<Router>
				<Header />
				<main className='py-3'>
					<Container>
						<Switch
							isOn={value}
							onChange={() => {
								setDarkTheme(prevTheme => !prevTheme)
								setValue(!value)
							}}
						/>
						<Route path='/' exact component={Home} />
						<Route path='/day-3-solutions' component={day3} />
						<Route path='/day-4-solutions' component={Day4} />
						<Route path='/day-6-solutions' component={Day6} />
						<Route path='/day-8-solutions' component={Day8} />
						<Route path='/day-11-solutions' component={Day11} />
					</Container>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
