const SERVER = 'DEV'

const BASE = {
	DEV: {
		BASE_API: 'http://localhost:3001',
		BASE_PATH_API: '/api/v1/insurance',
	},
	PROD: {
		BASE_API: 'https://fininsurance.co.th:2022',
		BASE_PATH_API: '/api/v1/insurance',
	},
}

const BASE_API = BASE[SERVER].BASE_API
const BASE_PATH_API = BASE[SERVER].BASE_PATH_API
const BASE_PATH_CENTER_API = BASE['PROD'].BASE_API + BASE['PROD'].BASE_PATH_API

export const API = {
	BASE_API,
	BASE_PATH_API,
	BASE_PATH_CENTER_API,
}
