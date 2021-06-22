import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>30 Days of React Solutions</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav classname='mr-auto'>
							<Nav.Link>Home</Nav.Link>
							<NavDropdown title='Solutions' id='collapse-dropdown'>
								<NavDropdown.Item href='/day-3-solutions'>
									Day 3
								</NavDropdown.Item>
								<NavDropdown.Item href='#4'>Day 4</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
