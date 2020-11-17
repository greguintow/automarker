let useMemo = require('preact/hooks').useMemo
let automarker = require('..')

module.exports = function (str, search) {
	return useMemo(() => automarker(str, search), [str, search])
}
