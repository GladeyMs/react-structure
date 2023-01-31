import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
	const [input, setInput] = useState({})
	const navigate = useNavigate()

	const handleChangeInput = (e) => {
		const { name, value } = e.currentTarget
		setInput((prev) => ({ ...prev, [name]: value }))
	}

	const handleClickSubmit = async () => {
		const { username, password } = input
		const res = await axios.post(
			'https://crm-telesale.works.thutchayasatit.com/api/v1/insurance/auth/login',
			{ username, password }
		)
		if (res && res.status === 200) {
			navigate('/about')
		}
	}
	return (
		<div>
			<div>``
				<input name='username' onChange={handleChangeInput} />
			</div>
			<div>
				<input name='password' onChange={handleChangeInput} />
			</div>
			<div>
				<button onClick={handleClickSubmit}>submit</button>
			</div>
		</div>
	)
}
