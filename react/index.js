let useMemo = require('react').useMemo
let automarker = require('..')

module.exports = function (str, search) {
	return useMemo(() => automarker(str, search), [str, search])
}
