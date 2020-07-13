exports.takeParts = function (str, search) {
	let parts = str.split(new RegExp(search, 'ig'))
	console.log(parts)
	let cur = ''
	let result = []
	let ret
	for (let i = 0; i < parts.length; i++) {
		if (parts[i] === '') {
			ret = {
				text: str.slice(cur.length, cur.length + search.length),
				highlight: true
			}
		} else {
			ret = {
				text: parts[i],
				highlight: false
			}
		}
		cur += ret.text
		result.push(ret)
		if (parts[i + 1] && (i !== 0 || parts[0] !== '')) {
			let text = str.slice(cur.length, cur.length + search.length)
			cur += text
			result.push({
				text: text,
				highlight: true
			})
		}
	}
	return result
}
