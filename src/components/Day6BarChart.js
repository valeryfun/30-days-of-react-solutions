import React from 'react'
import { Bar } from 'react-chartjs-2'

const Day6BarChart = () => {
	const tenHighestPopulation = [
		{ country: 'World', population: 7693165599 },
		{ country: 'China', population: 1377422166 },
		{ country: 'India', population: 1295210000 },
		{ country: 'United States of America', population: 323947000 },
		{ country: 'Indonesia', population: 258705000 },
		{ country: 'Brazil', population: 206135893 },
		{ country: 'Pakistan', population: 194125062 },
		{ country: 'Nigeria', population: 186988000 },
		{ country: 'Bangladesh', population: 161006790 },
		{ country: 'Russian Federation', population: 146599183 },
		{ country: 'Japan', population: 126960000 }
	]

	const populationValues = tenHighestPopulation => {
		return tenHighestPopulation.map(d => d.population)
	}

	const countryNames = tenHighestPopulation => {
		return tenHighestPopulation.map(c => c.country)
	}

	const data = {
		labels: countryNames(tenHighestPopulation),
		datasets: [
			{
				label: 'Population',
				data: populationValues(tenHighestPopulation),
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)'
					// 	'rgba(255, 206, 86, 0.2)',
					// 	'rgba(75, 192, 192, 0.2)',
					// 	'rgba(153, 102, 255, 0.2)',
					// 	'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)'
					// 'rgba(255, 206, 86, 1)',
					// 'rgba(75, 192, 192, 1)',
					// 'rgba(153, 102, 255, 1)',
					// 'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}
		]
	}

	const options = {
		indexAxis: 'y',
		elements: {
			bar: {
				borderWidth: 2
			}
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'right'
			},
			title: {
				display: true,
				text: 'World Population'
			}
		}
	}

	return (
		<div>
			<Bar data={data} options={options} />
		</div>
	)
}

export default Day6BarChart
