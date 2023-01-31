import React from 'react'

export const Report = () => {
	return (
		<div>
			<Greeting name='Mos' />
		</div>
	)
}

const Greeting = ({ name }) => {
	return <label>{name}</label>
}
