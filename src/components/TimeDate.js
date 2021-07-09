import React, { useEffect, useState } from 'react'

const TimeDate = () => {
	const locale = 'en'
	const [today, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 60 * 1000)
		return () => {
			clearInterval(timer)
		}
	}, [])

	const day = today.toLocaleDateString(locale, { weekday: 'long' })
	const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
		month: 'long'
	})}\n\n`
	console.log(date)
	const hour = today.getHours()
	const text = `Good ${
		(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'
	}!`
	const time = today.toLocaleTimeString(locale, {
		hour: 'numeric',
		hour12: true,
		minute: 'numeric'
	})
	console.log(time)

	return (
		<div>
			<h3>{text}</h3>
			<h5>
				It's {date}, {time}.
			</h5>
		</div>
	)
}

export default TimeDate
