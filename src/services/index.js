import axios from 'axios'
// import { Store } from '../stores'
import CONFIG from './apiConfig'

const getConfig = (isForm) => {
	// const { authen } = Store ? Store?.getState() : {}
	// const token = authen?.token ? `Bearer ${authen.token}` : null
	const config = {
		baseURL: CONFIG.BASE_API + CONFIG.BASE_PATH_API,
		headers: {
			'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
			// Authorization: token,
		},
		params: {},
	}
	return config
}

const axiosSuccess = (res) => {
	if (res && res.status === 200) {
		return res
	} else {
		return false
	}
}

const axiosError = (error) => {
	return error.response
}

const axiosService = async (type, url, params, isForm) => {
	let config = getConfig(isForm)
	return axios
		.request({
			method: type,
			url,
			data: params,
			...config,
		})
		.then(axiosSuccess)
		.catch(axiosError)
}

export const apiService = () => {
	return {
		get: ({ url, body }) => axiosService('get', url, body),
		post: ({ url, body }, isForm) => axiosService('post', url, body, isForm),
		put: ({ url, body }, isForm) => axiosService('put', url, body, isForm),
		patch: ({ url, body }) => axiosService('patch', url, body),
		delete: ({ url }) => axiosService('delete', url),
	}
}
