export const convertToUrlString = (data: object) => {
	return Object.entries(data)
		.filter(r => !!r[1])
		.map(item => `${item[0]}=${item[1]}`)
		.join('&')
}
