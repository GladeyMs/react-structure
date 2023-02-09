import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
	const navigate = useNavigate()
	return (
		<Button onClick={() => navigate('/about')}>change to abouta</Button>
		// <Link to='/about'>change to about</Link>
	)
}
