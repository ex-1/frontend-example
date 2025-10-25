import _axios from 'axios'

export function fetcherFactory(baseURL: string) {
	const params = {
		withCredentials: true,
		withXSRFToken: true,
		xsrfCookieName: 'csrftoken',
		xsrfHeaderName: 'X-CSRFToken'
	}

	const axios = _axios.create({ baseURL, ...params })

	return axios.request
}
